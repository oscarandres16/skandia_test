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

/**
 * Componente que muestra una tarjeta con la información de un producto.
 */
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
  /**
   * Información del producto a mostrar.
   */
  @Input() public data: Product = {} as Product;
  /**
   * Evento que se emite cuando el checkbox de la tarjeta cambia de estado.
   */
  @Output() public change: EventEmitter<boolean> = new EventEmitter();
  /**
   * Formulario del componente.
   */
  public form!: UntypedFormGroup;
  /**
   * Clases y URL de icono por tipo de producto.
   */
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
  /**
   * Clase de la tarjeta.
   */
  public cardClass: string = '';
  /**
   * URL del icono.
   */
  public iconUrl: string = '';

  /**
   * Constructor del componente.
   * @param {FormBuilder} formBuilder - Constructor de formularios reactivos.
   */
  constructor(private formBuilder: FormBuilder) {}

  /**
   * Inicialización del componente.
   */
  ngOnInit(): void {
    this.buildForm();
    this.cardClass = this.productTypeClass[this.data.productType || 'new'].card;
    this.iconUrl =
      this.productTypeClass[this.data.productType || 'new'].iconUrl || '';
  }

  /**
   * Construye el formulario del componente.
   */
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
