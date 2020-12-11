/* tslint:disable */
/* eslint-disable */
/**
*/
export function anim(): void;
/**
*/
export function calc(): void;
/**
*/
export function cursor(): void;
/**
*/
export function custom_widget(): void;
/**
*/
export function either(): void;
/**
*/
export function event_viewer(): void;
/**
*/
export function flex(): void;
/**
*/
export function game_of_life(): void;
/**
*/
export function hello(): void;
/**
*/
export function identity(): void;
/**
*/
export function image(): void;
/**
*/
export function invalidation(): void;
/**
*/
export function layout(): void;
/**
*/
export function lens(): void;
/**
*/
export function list(): void;
/**
*/
export function multiwin(): void;
/**
*/
export function open_save(): void;
/**
*/
export function panels(): void;
/**
*/
export function parse(): void;
/**
*/
export function scroll_colors(): void;
/**
*/
export function scroll(): void;
/**
*/
export function split_demo(): void;
/**
*/
export function styled_text(): void;
/**
*/
export function switches(): void;
/**
*/
export function timer(): void;
/**
*/
export function tabs(): void;
/**
*/
export function view_switcher(): void;
/**
*/
export function widget_gallery(): void;
/**
*/
export function text(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly anim: () => void;
  readonly calc: () => void;
  readonly cursor: () => void;
  readonly custom_widget: () => void;
  readonly either: () => void;
  readonly event_viewer: () => void;
  readonly flex: () => void;
  readonly game_of_life: () => void;
  readonly hello: () => void;
  readonly identity: () => void;
  readonly image: () => void;
  readonly invalidation: () => void;
  readonly layout: () => void;
  readonly lens: () => void;
  readonly list: () => void;
  readonly multiwin: () => void;
  readonly open_save: () => void;
  readonly panels: () => void;
  readonly parse: () => void;
  readonly scroll_colors: () => void;
  readonly scroll: () => void;
  readonly split_demo: () => void;
  readonly styled_text: () => void;
  readonly switches: () => void;
  readonly timer: () => void;
  readonly tabs: () => void;
  readonly view_switcher: () => void;
  readonly widget_gallery: () => void;
  readonly text: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0cda70b23dc60b63: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h84af7ed0c10de93e: (a: number, b: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        