import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Servicio que almacena la configuración global de la aplicación.
 */
@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  /**
   * Indica si se activa el modo oscuro.
   */
  public darkMode: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
