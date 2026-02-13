#initialisation des commandes, ....
#instanciation et initialisation

#fonctions_pilotées
#def reglage_temp_nini(temp_mini):


#######################################################        
def traitement_commandes_dynamiques(commande, dico):
    try :
        if commande!='':
            dico["commande"]=commande
        commande_split=commande.split('=')
        ##############################################
        if commande_split[0] == 'temp_mini':
            dico["consigne_temp_mini"]=str(commande_split[1])
            #reglage_temp_nini(int(commande_split[1]))
        elif commande_split[0] == 'temp_max':
            dico["consigne_temp_maxi"]=str(commande_split[1])
        elif commande_split[0] == 'humid_mini':
            dico["consigne_humi_nini"]=str(commande_split[1])
        elif commande_split[0] == 'humid_max':
            dico["consigne_humi_maxi"]=str(commande_split[1])
        elif commande_split[0] == 'ventilation':
            if dico["consigne_ventilateur"]=='On':
                dico["consigne_ventilateur"]="Off"
            else:
                dico["consigne_ventilateur"]="On"
            
    ##################################################
    except :
        pass