#initialisation des commandes, ....
#instanciation et initialisation
import parametres 
repertoire = parametres.repertoire

#fonctions_pilotées


#######################################################        
def traitement_commandes_dynamiques(commande, dico):
    try :
        if commande!='':
            dico["commande"]=commande
        commande_split=commande.split('=')
        ##############################################
        if commande_split[0] == 'current':
            currenValue=int(commande_split[1])
            dico["current"]=str(currenValue)
            dico["temp_mini"]=str(dico["consigne_temp_mini"][currenValue])
            dico["temp_median"]=str(dico["consigne_temp_median"][currenValue])
            dico["temp_maxi"]=str(dico["consigne_temp_maxi"][currenValue])
            dico["humi_nini"]=str(dico["consigne_humi_nini"][currenValue])
            dico["humi_median"]=str(dico["consigne_humi_median"][currenValue])
            dico["humi_maxi"]=str(dico["consigne_humi_maxi"][currenValue])
        if commande_split[0] == 'temp_mini':
            dico["temp_mini"]=str(commande_split[1])
        elif commande_split[0] == 'temp_median':
            dico["temp_median"]=str(commande_split[1])
        elif commande_split[0] == 'temp_max':
            dico["temp_maxi"]=str(commande_split[1])
        elif commande_split[0] == 'humid_mini':
            dico["humi_nini"]=str(commande_split[1])
        elif commande_split[0] == 'humi_median':
            dico["humi_median"]=str(commande_split[1])
        elif commande_split[0] == 'humid_max':
            dico["humi_maxi"]=str(commande_split[1])
        elif commande_split[0] == 'ventilation':
            if dico["ventilateur"]=='On':
                dico["ventilateur"]="Off"
            else:
                dico["ventilateur"]="On"
         with open(repertoire+'/dico.txt',"w",encoding="utf8") as file:
        file.write(f"{dico}")   
    ##################################################
    except :
        pass