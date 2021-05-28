import { Injectable } from '@angular/core';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
/**
 * Class réprésentant le service d'un compte
 * @author fabien
 * @version 1.0
 */
export class CompteService {

<<<<<<< Updated upstream
  // Instancier un objet de type compte
  compte : Compte = new Compte(1,"moniquedubois@example.com","Du1950!bois", []);
=======
  // TODO
  // matcher l'adresse mail et le mot de passe, l'adresse mail est unique, le mot de passe peut exister sur des comptes différents.
  // capturer et gérer l'erreur, si une donnée est null 

  compte1 : Compte = new Compte(1,"test1@test.com","test1", []); 
  compte2 : Compte = new Compte(2,"test2@test.com","test2", []);

  listeComptes = [this.compte1, this.compte2];
>>>>>>> Stashed changes

  constructor() { }

<<<<<<< Updated upstream
=======
  /**
   * Créer un compte
   * @param compte 
   * @public
   */
  public save = (compte : Compte) : void => {
    console.log("compte ajouté : " + compte)
    this.listeComptes.push(compte);
  }

  /**
   * Récupérer tous les comptes
   * @returns {[Compte]} listeComptes
   * @public
   */
  public findAll  = () : Compte[] => {
    console.log("liste des comptes : " + this.listeComptes)
    return this.listeComptes;
  }

  /**
   * Récupérer un compte
   * @param id 
   * @returns {Compte} compteId
   * @public
   */
  public findById = (id : number) : Compte => {
    let compteId : Compte;
    this.listeComptes.forEach(compte => {
      if(compte.id == id) {
        compteId = compte;
        console.log("compte récupéré : " + compteId)
      }
    })
    return compteId;
  }

  /**
   * Mettre à jour un compte
   * @param compte 
   * @public
   */
  public update = (compte : Compte) : void => {
    console.log("compte existant : " + this.findById(compte.id));
    this.delete(compte.id);
    console.log("liste des comptes : " + this.findAll());
    this.save(compte);
    console.log("compte ajouté : " + compte);
  }

  /**
   * Supprimer un compte
   * @param id 
   * @public
   */
  public delete = (id : number) : void => {
    let compte = this.findById(id);
    console.log("compte récupéré : " + compte)
    let indexCompte = this.listeComptes.indexOf(compte);
    console.log("index du compte : " + indexCompte);
    this.listeComptes.splice(indexCompte, 1);
    console.log("compte supprimé : " + compte)
  }

>>>>>>> Stashed changes
}
