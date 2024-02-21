import { Injectable } from '@angular/core';
import { AppComponent } from '../../app/app.component';
import { tap } from 'rxjs';

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number = 0;
  clear(): void {}
  getItem(key: string): string | null {return null;}
  key(index: number): string | null {return null;}
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
  hasItem(key: string): boolean {return false;}
}

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService implements Storage {

  private _storage: Storage;

  constructor() {
    this._storage = new LocalStorage();

    AppComponent.isBrowser
    .pipe(
      tap((isBrowser: boolean | null) => {
        if (isBrowser) {
          this._storage = localStorage;
        }
      })
    )
    .subscribe();
  }

  [name: string]: any;

  length: number = 0;

  public clear(): void {
    this._storage.clear();
  }

  public getItem(key: string): string | null {
    return this._storage.getItem(key);
  }

  public key(index: number): string | null {
    return this._storage.key(index);
  }

  public removeItem(key: string): void {
    return this._storage.removeItem(key);
  }

  public hasItem(key: string): boolean {
    return this._storage.getItem(key) !== null
  }

  public setItem(key: string, value: string): void {
    return this._storage.setItem(key, value);
  }
}