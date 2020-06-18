import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import {AnwesenheitenService  } from "src/app/services/anwesenheiten.service";
import {PersonenService  } from "src/app/services/personen.service";
import { ToastService } from "src/app/services/toast.service";
import { Anwesenheit } from "src/app/models/anwesenheit";
import { Person } from "src/app/models/person";

@Component({
  selector: "app-anwesenheit-details",
  templateUrl: "./anwesenheit-details.page.html",
  styleUrls: ["./anwesenheit-details.page.scss"],
})
export class AnwesenheitDetailsPage implements OnInit {
  anwesenheitToEdit: Anwesenheit;
  anwesenheiten: Anwesenheit[];
  isAnwesend: boolean;
  fehlendListeArray;
  fehlendListeArray2;
  anwesenheitFehlend: Anwesenheit[];
  personenDetails: Person[];
  anwesenheit: Anwesenheit;
  anwesenheitID;
  anwesenheitKlasse;
  anwesenheitDatum;
  pageFront;
  selectedPersonID;
  anwesenheitMode;
  todaysDate;

  constructor(
    private db: AnwesenheitenService,
    private ts: ToastService,
    public mc: ModalController,
    private person: PersonenService
    
  ) {}
  
  
  ngOnInit() {
 
    this.todaysDate=new Date().toString();
    
    if(this.anwesenheitMode!='new')
    {
    this.db
      .getAnwesenheitFehlend(this.anwesenheitID)
      .subscribe((anwesenheitFehlend) => {
        this.anwesenheitFehlend = anwesenheitFehlend;

       
       
        //this.anwesenheiten.sort(function (a, b) {
        //  return b.erfasstAm < a.erfasstAm ? -1 : 1;
        //});
      });

    
    } 
    

    this.person.getPersonen().subscribe((personenDetails) => {
      this.personenDetails = personenDetails;
     
    });


    this.db.getAnwesenheiten().subscribe((anwesenheiten) => {
      this.anwesenheiten = anwesenheiten;

      //this.anwesenheiten.sort(function (a, b) {
      //  return b.erfasstAm < a.erfasstAm ? -1 : 1;
      //});
    });
  }

 CreateAnwesenheit()
 {
  console.log(this.newAnwesenheit);
 }

  CheckAnwesenheit(personenID:number)

  {
    this.fehlendListeArray= this.anwesenheiten.find(anwesenheiten=>anwesenheiten.id==="1").fehlendListe;
    this.fehlendListeArray2= this.anwesenheiten.find(anwesenheiten=>anwesenheiten.id==="1").unentschuldigtListe;

    
    if(this.fehlendListeArray.indexOf(personenID)==-1 && this.fehlendListeArray2.indexOf(personenID)==-1)
    {
      return true;
    }
    else{ return false;}
  
  }



  CloseModal() {
    this.mc.dismiss();
  }
}
