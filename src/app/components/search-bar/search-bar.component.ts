import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddbuttonComponent } from '../addbutton/addbutton.component';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
  showPopUp(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 80;
    this.dialog.open(AddbuttonComponent, dialogConfig);
  }
}
