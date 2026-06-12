import { Component, signal } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  SpinnerComponent,
  ContainerComponent,
  FormControlDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  ButtonCloseDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  DropdownComponent,
  DropdownToggleDirective,
  DropdownMenuDirective,
  DropdownItemDirective,
  FormCheckLabelDirective,
  GutterDirective,
  ProgressComponent,
  RowComponent,
  TableDirective
} from '@coreui/angular';

@Component({
  selector: 'app-owners',
  imports: [
    CommonModule,
    RouterLink,
    IconDirective,
    ContainerComponent,
    SpinnerComponent,
    FormControlDirective,
    FormSelectDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    AvatarComponent,
    ButtonDirective,
    ButtonGroupComponent,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalToggleDirective,
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    ColComponent,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    FormCheckLabelDirective,
    GutterDirective,
    ProgressComponent,
    RowComponent,
    TableDirective
  ],
  templateUrl: './owners.html',
  styleUrl: './owners.scss',
})
export class Owners {
  selectedOwner = signal<any | null>(null);

  public owners = [
    {
      id: '001',
      firstname: 'Phoebe',
      middlename: 'Lotino',
      lastname: 'Brugasa',
      houseno: '302',
      street: 'Purok 1',
      email:   'brugasa23@email.com',
      mobileno: '09123456789',
      noofdogs: 5,
      dogs: [
        {
          name: 'kurama',
          age: '10 months',
          breed: 'Aspin',
        },
        {
          name: 'Chubby',
          age: '4 years',
          breed: 'Zhitsu',
        },
        {
          name: 'Pogi',
          age: '9 months',
          breed: 'Witch Dog',
        },
      ]
    },
    {
      id: '002',
      firstname: 'Geroy',
      middlename: 'Vilao',
      lastname: 'Chisoto',
      houseno: '117',
      street: 'Purok 2',
      email:   'geobaya@yahoo.com.ph',
      mobileno: '09915487878',
      noofdogs: 1,
      dogs: [
        {
          name: 'krring',
          age: '1 months',
          breed: 'Akita',
        },
        {
          name: 'Pandango',
          age: '3 years, 5 months',
          breed: 'Aspin',
        },
        {
          name: 'Barto',
          age: '1 year, 2 months',
          breed: 'Labrador',
        },
      ]
    },
    {
      id: '003',
      firstname: 'Luzviminda',
      middlename: 'Nunal',
      lastname: 'Chuaa',
      houseno: '092',
      street: 'Purok 1',
      email:   'luzon@gamil.com.',
      mobileno: '09107487771',
      noofdogs: 3,
      dogs: [
        {
          name: 'Dhaz',
          age: '3 months',
          breed: 'Akita',
        },
        {
          name: 'Pandak',
          age: '8 months',
          breed: 'Chiuaua',
        },
        {
          name: 'Barto',
          age: '1 year, 2 months',
          breed: 'Labrador',
        },
      ]
    },
  ];



  ViewSelectedOwner(owner: any) {
    this.selectedOwner.set(owner);
  }

}
