import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.scss'],
})
export class AddbuttonComponent implements OnInit {
  constructor(public dialogbox: MatDialogRef<AddbuttonComponent>) {}
  gameForm!: FormGroup;
  public genre: Array<string> = [
    'Sandbox',
    'Real-time strategy (RTS)',
    'Shooters (FPS and TPS)',
    'Multiplayer online battle arena (MOBA)',
    'Role-playing (RPG, ARPG, and More)',
    'Simulation and sports',
    'Puzzlers and party games',
    'Action-adventure',
    'Survival and horror',
    'Platformer',
  ];

  ngOnInit(): void {
    this.gameForm = new FormGroup({
      Name: new FormControl(),
      Genre: new FormControl(),
      Platform: new FormControl(),
      Rating: new FormControl(),
      Description: new FormControl(),
      Releasedate: new FormControl(),
      Website: new FormControl(),
      thumbnail: new FormControl(),
    });
  }
  onClose(): void {
    this.dialogbox.close();
  }
  onSubmit() {
    console.log(this.gameForm.value);
  }
}
