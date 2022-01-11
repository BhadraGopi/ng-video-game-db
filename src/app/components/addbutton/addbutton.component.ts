import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormArray } from '@angular/forms';
import { Game } from 'src/app/services/models';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.scss'],
})
export class AddbuttonComponent implements OnInit {
  showAddForm: boolean = false;
  constructor(
    public dialogbox: MatDialogRef<AddbuttonComponent>,
    private formBuilder: FormBuilder
  ) {}
  otherForm!: FormGroup;
  items!: FormArray;
  gameForm!: FormGroup;
  selectes!: string;
  platform!: string;
  public games: Array<Game> = [];
  public genres: Array<string> = [
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
  public platforms: Array<string> = [
    'playstation',
    'xbox',
    'nintendo',
    'pc',
    'mac',
    'ios',
    'web',
    'sega',
    'commodore-amiga',
  ];
  public similarGms: Array<string> = [
    'The Grant Theft Auto',
    'Assasins Creed',
    'Vice City',
    'Slender man',
    'Clash of clans',
    'PubG',
    'Battle field',
    'None',
    'Add similar games',
  ];
  ngOnInit(): void {
    this.otherForm = this.formBuilder.group({
      gameName: ' ',
      items: this.formBuilder.array([this.createItem()]),
    });
    this.gameForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      genre: ['', Validators.required],
      platforms: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      website: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      othergames: ['', Validators.required],
      thumbnail: ['', Validators.required],
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      gameName: '',
    });
  }
  addItem(): void {
    this.items = this.otherForm.get('items') as FormArray;
    this.items.push(this.createItem());
    // console.log(this.items.value);
    this.games.push(this.items.value);
  }
  addSimilar(selected: string) {
    if (selected === 'Add similar games') {
      this.showAddForm = true;
    } else {
      this.showAddForm = false;
    }
  }
  deleteNewName(index: number) {
    const add = this.otherForm.get('items') as FormArray;
    add.removeAt(index);
    // console.log(this.items.value);
  }
  onClose(): void {
    this.dialogbox.close();
  }
  onSubmit() {
    console.log(this.gameForm.value);
    this.dialogbox.close(this.gameForm.value);
  }
  get itemcontrol() {
    return this.otherForm.get('items') as FormArray;
  }
}
