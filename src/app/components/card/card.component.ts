import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() public data: Product = {} as Product;
  @Output() public change: EventEmitter<boolean> = new EventEmitter();
  public form!: UntypedFormGroup;
  private productTypeClass: {
    [key: string]: {
      card: string;
      iconUrl?: string;
    };
  } = {
    ahorro: { card: 'primary', iconUrl: '../../../assets/imgs/svgs/Happy.svg' },
    inversion: {
      card: 'seconadry',
      iconUrl: '../../../assets/imgs/svgs/trofeo.svg',
    },
    credito: {
      card: 'tertiary',
      iconUrl: '../../../assets/imgs/svgs/hand3.svg',
    },
    new: { card: 'new' },
  };
  public cardClass: string = '';
  public iconUrl: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.cardClass = this.productTypeClass[this.data.productType || 'new'].card;
    this.iconUrl = this.productTypeClass[this.data.productType || 'new'].iconUrl || '';
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      checked: [false],
    });
    this.form?.controls?.['checked']?.valueChanges.subscribe(
      (checked: boolean) => {
        this.change.emit(checked);
      }
    );
  }
}
