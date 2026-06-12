import { Component, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IconDirective } from '@coreui/icons-angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
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
} from '@coreui/angular';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-users',
  imports: [
    SpinnerComponent,
    CommonModule,
    ReactiveFormsModule,
    FormSelectDirective,
    NgTemplateOutlet,
    IconDirective,
    FormControlDirective,
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
    TableDirective,
    RouterLink,
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {

  selectedUser = signal<any | null>(null);

  public users = [
    {
      id: '011',
      firstname: 'Max',
      middlename: 'Milagrosa',
      lastname: 'Batibod',
      role: 'Barangay Staff'
    },
    {
      id: '012',
      firstname: 'Juan',
      middlename: 'Dula',
      lastname: 'Gogo',
      role: 'Admin'
    },
    {
      id: '013',
      firstname: 'Pedro',
      middlename: 'Luma',
      lastname: 'Nagia',
      role: 'Barangay Staff'
    },
  ];

  userForm!: FormGroup;
  editForm!: FormGroup;

  // spinner state
  isCreatingUser = signal(false);
  isDeletingUser = signal(false);
  isUpdatingUser = signal(false);
  isDoneCreatingUser = signal(false);
  isDoneDeletingUser = signal(false);
  isDoneUpdatingUser = signal(false);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      role: ['Barangay Staff', Validators.required]
    });

    // edit form
    this.editForm = this.fb.group({
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      role: ['', Validators.required],
    });

  }

  editUser(user: any) {
    // pass selected user to the modal
    this.selectedUser.set(user);

    console.log('edit form')

    setTimeout(() => {
      this.editForm.patchValue({
        firstname: user.firstname,
        middlename: user.middlename,
        lastname: user.lastname,
        role: user.role
      });
    });
  }

  updateUser(user: any) {

    const selected = this.selectedUser();
    if (!selected) return;

    const updatedData = this.editForm.value;

    this.isUpdatingUser.set(true);

    setTimeout(() => {
      this.users = this.users.map(u =>
        u.id === selected.id
          ? { ...u, ...updatedData }
          : u
      );

      this.isUpdatingUser.set(false);
      this.selectedUser.set(null);
    }, 1000);
  }

  /* Create User */
  createUser() {
    if (this.userForm.invalid) return;
    const newUser = {
      id: crypto.randomUUID(), // random ID
      ...this.userForm.value
    }
    this.isCreatingUser.set(true);
    // simulate API call
    setTimeout(() => {
      this.isCreatingUser.set(false);
      this.isDoneCreatingUser.set(false);
      this.userForm.reset({ role: 'Barangay Staff' });
      this.isDoneCreatingUser.set(true);
      // push to users
      this.users.push(newUser);
    }, 1000);
  }

  /* delete User */
  deleteUser(userId: string) {
    this.isDeletingUser.set(true);
    setTimeout(() => {
      this.isDeletingUser.set(false);
      this.isDoneDeletingUser.set(false);
      // delete user
      this.users = this.users.filter(user => user.id !== userId);
      this.isDoneDeletingUser.set(true);
    }, 1000);
  }

  resetCreateUserForm() {
    this.userForm.reset({
      firstname: '',
      middlename: '',
      lastname: '',
      role: 'Barangay Staff'
    });
  }

}
