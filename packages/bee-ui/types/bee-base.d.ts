import Vue from 'vue'
export declare class NGComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type NGComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type NGComponentAlignment = 'left' | 'center' | 'right'