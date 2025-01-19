import { Component } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class ApplicationComponent {
  
  playersList: string[] = [];
  playerName: string = "";
  optionNumberTeams: number[] = [2,3,4,5,6,7,8,9,10,11,12];
  shuffledList: string[] = [];

  addPlayerToList() {
    if (this.playerName == "") {
      alert("Fill in a name")
    }
    else {
      this.playersList.push(this.playerName);
      this.playerName = "";
      console.log(this.playersList.length);
    }
  }

  deletePlayerFromList(index: number) {
    this.playersList.splice(index, 1);
  }

  generateTeams(): string[] {
    this.shuffledList = [...this.playersList];
    for (let i = this.shuffledList.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [this.shuffledList[i], this.shuffledList[j]] = [this.shuffledList[j], this.shuffledList[i]];
    }
    return this.shuffledList;
  }
  

  constructor() {
    
  }
}
