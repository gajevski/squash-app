import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this._storage = localStorage;
    } else {
      this._storage = new LocalStorage();
    }
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