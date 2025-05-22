import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeCompetitions = [
    {
    id:1,
    name:"Foot Ball Masculin",
    city: "Paris",
    site:"Stade de France",
    date: "06/08/2024",
    time: "14h00",
    urlImg: "../assets/images/foot_m.jpg"
  },

    {
      id:2,
      name:"Athletisme Masculin",
      city: "Paris",
      site:"Stade de France",
      date: "26/08/2024",
      time: "16h00",
      urlImg: "../assets/images/athletisme_m.jpg"
    },

    {
      id:3,
      name:"Boxe Homme",
      city: "Paris",
      site:"Bercy Accor Arena",
      date: "26/08/2024",
      time: "14h00",
      urlImg: "../assets/images/boxe_m-60-kg.jpg"
    },

    {
      id:4,
      name:"Foot Ball Féminin",
      city: "Paris",
      site:"Stade de France",
      date: "26/08/2024",
      time: "20h00",
      urlImg: "../assets/images/foot_f.jpg"

    },

    {
      id:5,
      name:"Basket Homme",
      city: "Paris",
      site:"Bercy Accor Arena",
      date: "15/08/2024",
      time: "18h00",
      urlImg: "../assets/images/basket_m.jpg"

    },


    {
      id:6,
      name:"Gymnastique Féminin",
      city: "Paris",
      site:"Bercy Accor Arena",
      date: "10/08/2024",
      time: "19h00",
      urlImg: "../assets/images/gym_f.jpg"

    },

    {
      id:7,
      name:"Judo Masculin",
      city: "Paris",
      site:"Bercy Accor Arena",
      date: "05/08/2024",
      time: "20h30",
      urlImg: "../assets/images/judo_m.jpg"

    },

    {
      id:8,
      name:"Marathon Femme",
      city: "Paris",
      site:"Stade de France",
      date: "15/08/2024",
      time: "14h00",
      urlImg: "../assets/images/marathon_f.jpg"

    },

    {
      id:9,
      name:"Judo Féminin",
      city: "Paris",
      site:"Bercy Accor Arena",
      date: "30/08/2024",
      time: "18h00",
      urlImg: "../assets/images/judo_f_2.jpg"

    },
    {
      id:10,
      name:"Voley Ball Féminin",
      city: "Paris",
      site:"Bercy Accor Arena",
      date: "10/08/2024",
      time: "19h00",
      urlImg: "../assets/images/voleyball_f.jpg"

    },
    {
      id:11,
      name:"Basket Ball Féminin",
      city: "Paris",
      site:"Bercy Accor Arena",
      date: "04/08/2024",
      time: "19h00",
      urlImg: "../assets/images/basket_f.jpg"

    },
    {
      id:12,
      name:"Voley Ball Masculin",
      city: "Paris",
      site:"Bercy Accor Arena",
      date: "10/08/2024",
      time: "19h00",
      urlImg: "../assets/images/voleyball_f.jpg"

    },
  ]

  constructor() { }

}
