#### initialisation des capteurs et fonctions internes #############
from machine import Pin, I2C
import BME280
# Initialize I2C communication
i2c = I2C(id=1, scl=Pin(27), sda=Pin(26), freq=10000)

# Initialize BME280 sensor
bme = BME280.BME280(i2c=i2c, addr=0x76)
pilote_chauffage=Pin(0,Pin.OUT)
pilote_refroidissement=Pin(1,Pin.OUT)
pilote_humidificateur=Pin(2,Pin.OUT)
pilote_deshumidificateur=Pin(3,Pin.OUT)
pilote_ventilateur=Pin(4,Pin.OUT)

# Initialize 
pilote_chauffage.off()
pilote_refroidissement.off()
pilote_humidificateur.off()
pilote_deshumidificateur.off()
pilote_ventilateur.off()

#########################################################################
def gestion_interne_et_affichages_capteurs(dico) :
    ################### Gestion interne et capteurs #####################
    temp= float(bme.temperature[:-1])
    hum = float(bme.humidity[:-1])
    pres = bme.pressure[:-3]
    #print(temp)#debug

    if temp<=int(dico["consigne_temp_mini"]):
        pilote_chauffage.on()
    elif temp>=int(dico["consigne_temp_median"]):
        pilote_chauffage.off()
    elif temp<=int(dico["consigne_temp_median"]):
        pilote_refroidissement.off()
    elif temp>=int(dico["consigne_temp_maxi"]):
        pilote_refroidissement.on()

    if temp<=int(dico["consigne_humi_nini"]):
        pilote_humidificateur.on()
    elif temp>=int(dico["consigne_temp_median"]):
        pilote_humidificateur.off()
    elif temp<=int(dico["consigne_humi_median"]):
        pilote_deshumidificateur.off()
    elif temp>=int(dico["consigne_humi_maxi"]):
        pilote_deshumidificateur.on()

    if dico["consigne_ventilateur"]=="On":
        pilote_ventilateur.off()
        pilote_ventilateur_t='on'
    else :
        pilote_ventilateur.on()
        pilote_ventilateur_t='off'
    #print('ventilateur : ',pilote_ventilateur_t)#debug

    ################ Actualisation des variables web  #############
    dico["temperature"] = str(temp)
    dico["humidity"] = str(hum)
    dico["pressure"] = str(pres)
    
    ###################################################################    
    print (dico) # controle debug

    return(dico)

