import Vue from 'vue'
import { NGNavBar } from './nav-bar'


export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

export function install(vue: typeof Vue, options: InstallationOptions): void

export class NavBar extends NGNavBar { }