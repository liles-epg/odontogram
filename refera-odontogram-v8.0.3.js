/*
 * Refera-style Odontogram V8.0 Mixed Dentition
 * Production build configured specifically for this 123FormBuilder form.
 *
 * Required HTML:
 * <div id="odontogram-mount"></div>
 *
 * Built-in field mappings:
 * Selected Teeth  -> control121592721
 * Odontogram Data -> control121592722
 */
(() => {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const STYLE_ID = "refera-odontogram-v800-styles";
  const BUILD = "8.0.3";
  const DEBUG = true;
  const FIELD_RETRY_MS = 250;
  const FIELD_RETRY_LIMIT = 80;
  const MOUNT_RETRY_MS = 150;
  const MOUNT_RETRY_LIMIT = 400;

  function log(...args) {
    if (DEBUG && window.console) console.log("[Odontogram V8.0.3 Primary Dentition Centering]", ...args);
  }

  function warn(...args) {
    if (window.console) console.warn("[Odontogram V8.0.3 Primary Dentition Centering]", ...args);
  }

  const TEETH = [
    { id:"UR8", universal:"1",  fdi:"18", quadrant:"Upper Right", family:"molar",    side:"right" },
    { id:"UR7", universal:"2",  fdi:"17", quadrant:"Upper Right", family:"molar",    side:"right" },
    { id:"UR6", universal:"3",  fdi:"16", quadrant:"Upper Right", family:"molar",    side:"right" },
    { id:"UR5", universal:"4",  fdi:"15", quadrant:"Upper Right", family:"premolar", side:"right" },
    { id:"UR4", universal:"5",  fdi:"14", quadrant:"Upper Right", family:"premolar", side:"right" },
    { id:"UR3", universal:"6",  fdi:"13", quadrant:"Upper Right", family:"canine",   side:"right" },
    { id:"UR2", universal:"7",  fdi:"12", quadrant:"Upper Right", family:"lateral",  side:"right" },
    { id:"UR1", universal:"8",  fdi:"11", quadrant:"Upper Right", family:"central",  side:"right" },

    { id:"UL1", universal:"9",  fdi:"21", quadrant:"Upper Left", family:"central",  side:"left" },
    { id:"UL2", universal:"10", fdi:"22", quadrant:"Upper Left", family:"lateral",  side:"left" },
    { id:"UL3", universal:"11", fdi:"23", quadrant:"Upper Left", family:"canine",   side:"left" },
    { id:"UL4", universal:"12", fdi:"24", quadrant:"Upper Left", family:"premolar", side:"left" },
    { id:"UL5", universal:"13", fdi:"25", quadrant:"Upper Left", family:"premolar", side:"left" },
    { id:"UL6", universal:"14", fdi:"26", quadrant:"Upper Left", family:"molar",    side:"left" },
    { id:"UL7", universal:"15", fdi:"27", quadrant:"Upper Left", family:"molar",    side:"left" },
    { id:"UL8", universal:"16", fdi:"28", quadrant:"Upper Left", family:"molar",    side:"left" },

    { id:"LR8", universal:"32", fdi:"48", quadrant:"Lower Right", family:"molar",    side:"right" },
    { id:"LR7", universal:"31", fdi:"47", quadrant:"Lower Right", family:"molar",    side:"right" },
    { id:"LR6", universal:"30", fdi:"46", quadrant:"Lower Right", family:"molar",    side:"right" },
    { id:"LR5", universal:"29", fdi:"45", quadrant:"Lower Right", family:"premolar", side:"right" },
    { id:"LR4", universal:"28", fdi:"44", quadrant:"Lower Right", family:"premolar", side:"right" },
    { id:"LR3", universal:"27", fdi:"43", quadrant:"Lower Right", family:"canine",   side:"right" },
    { id:"LR2", universal:"26", fdi:"42", quadrant:"Lower Right", family:"lateral",  side:"right" },
    { id:"LR1", universal:"25", fdi:"41", quadrant:"Lower Right", family:"central",  side:"right" },

    { id:"LL1", universal:"24", fdi:"31", quadrant:"Lower Left", family:"central",  side:"left" },
    { id:"LL2", universal:"23", fdi:"32", quadrant:"Lower Left", family:"lateral",  side:"left" },
    { id:"LL3", universal:"22", fdi:"33", quadrant:"Lower Left", family:"canine",   side:"left" },
    { id:"LL4", universal:"21", fdi:"34", quadrant:"Lower Left", family:"premolar", side:"left" },
    { id:"LL5", universal:"20", fdi:"35", quadrant:"Lower Left", family:"premolar", side:"left" },
    { id:"LL6", universal:"19", fdi:"36", quadrant:"Lower Left", family:"molar",    side:"left" },
    { id:"LL7", universal:"18", fdi:"37", quadrant:"Lower Left", family:"molar",    side:"left" },
    { id:"LL8", universal:"17", fdi:"38", quadrant:"Lower Left", family:"molar",    side:"left" }
  ];

  const QUADRANT_TEETH = Object.freeze({
    upperRight: Object.freeze(["UR8","UR7","UR6","UR5","UR4","UR3","UR2","UR1"]),
    upperLeft:  Object.freeze(["UL1","UL2","UL3","UL4","UL5","UL6","UL7","UL8"]),
    lowerRight: Object.freeze(["LR8","LR7","LR6","LR5","LR4","LR3","LR2","LR1"]),
    lowerLeft:  Object.freeze(["LL1","LL2","LL3","LL4","LL5","LL6","LL7","LL8"])
  });

  const PRIMARY_TEETH = Object.freeze([
    Object.freeze({ id:"URA", universal:"A", fdi:"55", quadrant:"Upper Right", family:"molar", side:"right", dentition:"primary" }),
    Object.freeze({ id:"URB", universal:"B", fdi:"54", quadrant:"Upper Right", family:"molar", side:"right", dentition:"primary" }),
    Object.freeze({ id:"URC", universal:"C", fdi:"53", quadrant:"Upper Right", family:"canine", side:"right", dentition:"primary" }),
    Object.freeze({ id:"URD", universal:"D", fdi:"52", quadrant:"Upper Right", family:"lateral", side:"right", dentition:"primary" }),
    Object.freeze({ id:"URE", universal:"E", fdi:"51", quadrant:"Upper Right", family:"central", side:"right", dentition:"primary" }),
    Object.freeze({ id:"ULF", universal:"F", fdi:"61", quadrant:"Upper Left", family:"central", side:"left", dentition:"primary" }),
    Object.freeze({ id:"ULG", universal:"G", fdi:"62", quadrant:"Upper Left", family:"lateral", side:"left", dentition:"primary" }),
    Object.freeze({ id:"ULH", universal:"H", fdi:"63", quadrant:"Upper Left", family:"canine", side:"left", dentition:"primary" }),
    Object.freeze({ id:"ULI", universal:"I", fdi:"64", quadrant:"Upper Left", family:"molar", side:"left", dentition:"primary" }),
    Object.freeze({ id:"ULJ", universal:"J", fdi:"65", quadrant:"Upper Left", family:"molar", side:"left", dentition:"primary" }),
    Object.freeze({ id:"LLK", universal:"K", fdi:"75", quadrant:"Lower Left", family:"molar", side:"left", dentition:"primary" }),
    Object.freeze({ id:"LLL", universal:"L", fdi:"74", quadrant:"Lower Left", family:"molar", side:"left", dentition:"primary" }),
    Object.freeze({ id:"LLM", universal:"M", fdi:"73", quadrant:"Lower Left", family:"canine", side:"left", dentition:"primary" }),
    Object.freeze({ id:"LLN", universal:"N", fdi:"72", quadrant:"Lower Left", family:"lateral", side:"left", dentition:"primary" }),
    Object.freeze({ id:"LLO", universal:"O", fdi:"71", quadrant:"Lower Left", family:"central", side:"left", dentition:"primary" }),
    Object.freeze({ id:"LRP", universal:"P", fdi:"81", quadrant:"Lower Right", family:"central", side:"right", dentition:"primary" }),
    Object.freeze({ id:"LRQ", universal:"Q", fdi:"82", quadrant:"Lower Right", family:"lateral", side:"right", dentition:"primary" }),
    Object.freeze({ id:"LRR", universal:"R", fdi:"83", quadrant:"Lower Right", family:"canine", side:"right", dentition:"primary" }),
    Object.freeze({ id:"LRS", universal:"S", fdi:"84", quadrant:"Lower Right", family:"molar", side:"right", dentition:"primary" }),
    Object.freeze({ id:"LRT", universal:"T", fdi:"85", quadrant:"Lower Right", family:"molar", side:"right", dentition:"primary" })
  ]);

  const ALL_TEETH = Object.freeze([...TEETH, ...PRIMARY_TEETH]);


  const PRIMARY_ARTWORK = Object.freeze({
    URA: Object.freeze({ outline:"M-17.16,-15.8 C-12.06,-19.2 -7.5,-20.2 -3.5,-18.1 C-1,-17 1.6,-17.2 4.2,-18.2 C8.5,-20 13.2,-18.8 17.16,-14.5 C19,-8.2 18.4,0.2 17.1,6.2 C15.6,12.2 10.5,16 5.2,17.2 C2.2,18.4 -2.4,18.4 -5.5,17.2 C-11,15.8 -15.6,11.8 -17.2,5.8 C-18.5,0 -19,-8.4 -17.16,-15.8 Z", detail:"M-10,-7 C-7,-4 -4,-3 -1,-5 C2,-3 5,-4 9,-7 M-10,2 C-6,5 -3,5 0,3 C3,5 6,5 10,2 M-3,-5 C-4,-1 -3,2 0,3 M5,-6 C3,-2 3,1 4,4", highlight:"M-9,-11 C-5,-15 4,-15 9,-11 C5,-8 -5,-8 -9,-11 Z" }),
    URB: Object.freeze({ outline:"M-16.18,-15.8 C-12.28,-19.2 -7.5,-20.2 -3.5,-18.1 C-1,-17 1.6,-17.2 4.2,-18.2 C8.5,-20 13.2,-18.8 16.18,-14.5 C17.8,-8.2 17.2,0.2 15.9,6.2 C14.4,12.2 10.5,16 5.2,17.2 C2.2,18.4 -2.4,18.4 -5.5,17.2 C-11,15.8 -14.4,11.8 -16,5.8 C-17.3,0 -17.8,-8.4 -16.18,-15.8 Z", detail:"M-9,-7 C-6,-4 -3,-3 0,-5 C3,-3 6,-4 9,-7 M-9,3 C-6,5 -3,5 0,3 C3,5 6,5 9,3 M0,-5 L0,3", highlight:"M-9,-11 C-5,-15 4,-15 9,-11 C5,-8 -5,-8 -9,-11 Z" }),
    URC: Object.freeze({ outline:"M-11.5,-14.5 C-7.8,-18.5 -3,-20.2 0,-19.2 C3.3,-20.1 7.8,-18.1 11.5,-14 C12.5,-7.5 10.9,2.2 9.5,8.2 C7.3,13.7 4.8,17.3 2.5,19.2 C1.2,20.3 -1.2,20.3 -2.6,19.1 C-5,17.1 -7.4,13.5 -9.5,8 C-10.9,2 -12.5,-7.8 -11.5,-14.5 Z", detail:"M-5,-5 C-2,-3 0,-2 0,-5 C2,-2 4,-3 5,-5 M0,-5 L0,7", highlight:"M-5,-11 C-2,-15 3,-15 5,-11 C2,-9 -2,-9 -5,-11 Z" }),
    URD: Object.freeze({ outline:"M-11.02,-16 C-7.4,-18.2 -3.2,-19 0,-18.2 C3.5,-19 7.3,-18 11.02,-15.3 C11.6,-8.5 10.3,1.4 8.9,6.7 C6.8,12.4 4.5,16.8 2.3,18.6 C1.1,19.6 -1.1,19.6 -2.3,18.6 C-4.6,16.7 -6.8,12.3 -8.9,6.5 C-10.3,1.2 -11.6,-8.7 -11.02,-16 Z", detail:"M-4,-6 C-2,-4 2,-4 4,-6 M-2.5,5 C-1,4 1,4 2.5,5", highlight:"M-5,-13 C-2,-16 3,-16 5,-13 C2,-11 -2,-11 -5,-13 Z" }),
    URE: Object.freeze({ outline:"M-12.44,-17.5 C-8.44,-19.7 -3.6,-20.3 0,-19.7 C4,-20.3 8.44,-19.5 12.44,-17.2 C13,-10 11.4,1.5 9.8,7.5 C7.6,14.2 5.2,18.5 2.6,20.5 C1.2,21.6 -1.2,21.6 -2.6,20.5 C-5.2,18.5 -7.6,14.2 -9.8,7.3 C-11.5,1.2 -13,-10 -12.44,-17.5 Z", detail:"M-5,-6 C-2,-4 2,-4 5,-6 M-3,5 C-1,4 1,4 3,5", highlight:"M-5,-13 C-2,-16 3,-16 5,-13 C2,-11 -2,-11 -5,-13 Z" }),
    ULF: Object.freeze({ outline:"M-12.44,-17.5 C-8.44,-19.7 -3.6,-20.3 0,-19.7 C4,-20.3 8.44,-19.5 12.44,-17.2 C13,-10 11.4,1.5 9.8,7.5 C7.6,14.2 5.2,18.5 2.6,20.5 C1.2,21.6 -1.2,21.6 -2.6,20.5 C-5.2,18.5 -7.6,14.2 -9.8,7.3 C-11.5,1.2 -13,-10 -12.44,-17.5 Z", detail:"M-5,-6 C-2,-4 2,-4 5,-6 M-3,5 C-1,4 1,4 3,5", highlight:"M-5,-13 C-2,-16 3,-16 5,-13 C2,-11 -2,-11 -5,-13 Z" }),
    ULG: Object.freeze({ outline:"M-11.02,-16 C-7.4,-18.2 -3.2,-19 0,-18.2 C3.5,-19 7.3,-18 11.02,-15.3 C11.6,-8.5 10.3,1.4 8.9,6.7 C6.8,12.4 4.5,16.8 2.3,18.6 C1.1,19.6 -1.1,19.6 -2.3,18.6 C-4.6,16.7 -6.8,12.3 -8.9,6.5 C-10.3,1.2 -11.6,-8.7 -11.02,-16 Z", detail:"M-4,-6 C-2,-4 2,-4 4,-6 M-2.5,5 C-1,4 1,4 2.5,5", highlight:"M-5,-13 C-2,-16 3,-16 5,-13 C2,-11 -2,-11 -5,-13 Z" }),
    ULH: Object.freeze({ outline:"M-11.5,-14.5 C-7.8,-18.5 -3,-20.2 0,-19.2 C3.3,-20.1 7.8,-18.1 11.5,-14 C12.5,-7.5 10.9,2.2 9.5,8.2 C7.3,13.7 4.8,17.3 2.5,19.2 C1.2,20.3 -1.2,20.3 -2.6,19.1 C-5,17.1 -7.4,13.5 -9.5,8 C-10.9,2 -12.5,-7.8 -11.5,-14.5 Z", detail:"M-5,-5 C-2,-3 0,-2 0,-5 C2,-2 4,-3 5,-5 M0,-5 L0,7", highlight:"M-5,-11 C-2,-15 3,-15 5,-11 C2,-9 -2,-9 -5,-11 Z" }),
    ULI: Object.freeze({ outline:"M-16.18,-15.8 C-12.28,-19.2 -7.5,-20.2 -3.5,-18.1 C-1,-17 1.6,-17.2 4.2,-18.2 C8.5,-20 13.2,-18.8 16.18,-14.5 C17.8,-8.2 17.2,0.2 15.9,6.2 C14.4,12.2 10.5,16 5.2,17.2 C2.2,18.4 -2.4,18.4 -5.5,17.2 C-11,15.8 -14.4,11.8 -16,5.8 C-17.3,0 -17.8,-8.4 -16.18,-15.8 Z", detail:"M-9,-7 C-6,-4 -3,-3 0,-5 C3,-3 6,-4 9,-7 M-9,3 C-6,5 -3,5 0,3 C3,5 6,5 9,3 M0,-5 L0,3", highlight:"M-9,-11 C-5,-15 4,-15 9,-11 C5,-8 -5,-8 -9,-11 Z" }),
    ULJ: Object.freeze({ outline:"M-17.16,-15.8 C-12.06,-19.2 -7.5,-20.2 -3.5,-18.1 C-1,-17 1.6,-17.2 4.2,-18.2 C8.5,-20 13.2,-18.8 17.16,-14.5 C19,-8.2 18.4,0.2 17.1,6.2 C15.6,12.2 10.5,16 5.2,17.2 C2.2,18.4 -2.4,18.4 -5.5,17.2 C-11,15.8 -15.6,11.8 -17.2,5.8 C-18.5,0 -19,-8.4 -17.16,-15.8 Z", detail:"M-10,-7 C-7,-4 -4,-3 -1,-5 C2,-3 5,-4 9,-7 M-10,2 C-6,5 -3,5 0,3 C3,5 6,5 10,2 M-3,-5 C-4,-1 -3,2 0,3 M5,-6 C3,-2 3,1 4,4", highlight:"M-9,-11 C-5,-15 4,-15 9,-11 C5,-8 -5,-8 -9,-11 Z" }),
    LLK: Object.freeze({ outline:"M-18.04,-15.0 C-12.94,-19.2 -7.5,-20.2 -3.5,-18.1 C-1,-17 1.6,-17.2 4.2,-18.2 C8.5,-20 13.2,-18.8 18.04,-14.5 C19,-8.2 18.4,0.2 17.1,6.2 C15.6,12.2 10.5,16 5.2,16.5 C2.2,17.7 -2.4,17.7 -5.5,16.5 C-11,15.8 -15.6,11.8 -17.2,5.8 C-18.5,0 -19,-8.4 -18.04,-15.0 Z", detail:"M-10,-7 C-7,-4 -4,-3 -1,-5 C2,-3 5,-4 9,-7 M-10,2 C-6,5 -3,5 0,3 C3,5 6,5 10,2 M-3,-5 C-4,-1 -3,2 0,3 M5,-6 C3,-2 3,1 4,4", highlight:"M-9,-11 C-5,-15 4,-15 9,-11 C5,-8 -5,-8 -9,-11 Z" }),
    LLL: Object.freeze({ outline:"M-16.62,-15.0 C-12.72,-19.2 -7.5,-20.2 -3.5,-18.1 C-1,-17 1.6,-17.2 4.2,-18.2 C8.5,-20 13.2,-18.8 16.62,-14.5 C17.8,-8.2 17.2,0.2 15.9,6.2 C14.4,12.2 10.5,16 5.2,16.5 C2.2,17.7 -2.4,17.7 -5.5,16.5 C-11,15.8 -14.4,11.8 -16,5.8 C-17.3,0 -17.8,-8.4 -16.62,-15.0 Z", detail:"M-9,-7 C-6,-4 -3,-3 0,-5 C3,-3 6,-4 9,-7 M-9,3 C-6,5 -3,5 0,3 C3,5 6,5 9,3 M0,-5 L0,3", highlight:"M-9,-11 C-5,-15 4,-15 9,-11 C5,-8 -5,-8 -9,-11 Z" }),
    LLM: Object.freeze({ outline:"M-10.4,-14.5 C-7.8,-18.5 -3,-20.2 0,-19.2 C3.3,-20.1 7.8,-18.1 10.4,-14 C11.4,-7.5 9.8,2.2 8.4,8.2 C6.4,14 3.8,18.1 1.8,19.7 L0,20.5 L-2,19.5 C-4.2,17.8 -6.8,13.8 -8.4,8 C-9.8,2 -11.4,-7.8 -10.4,-14.5 Z", detail:"M-5,-5 C-2,-3 0,-2 0,-5 C2,-2 4,-3 5,-5 M0,-5 L0,7", highlight:"M-5,-11 C-2,-15 3,-15 5,-11 C2,-9 -2,-9 -5,-11 Z" }),
    LLN: Object.freeze({ outline:"M-9.48,-14.8 C-7.4,-18.2 -3.2,-19.0 0,-18.2 C3.5,-19.0 7.3,-18.0 9.48,-15.3 C10.5,-8.5 9.2,1.4 7.8,6.7 C6.3,12.5 3.2,17.5 0,18.3 C-3.2,17.5 -6.2,12.5 -7.8,6.5 C-9.2,1.2 -10.5,-8.7 -9.48,-14.8 Z", detail:"M-4,-6 C-2,-4 2,-4 4,-6 M-2.5,5 C-1,4 1,4 2.5,5", highlight:"M-5,-13 C-2,-16 3,-16 5,-13 C2,-11 -2,-11 -5,-13 Z" }),
    LLO: Object.freeze({ outline:"M-10.36,-15.8 C-7.56,-18.0 -3.6,-18.6 0,-18.0 C4,-18.6 7.56,-17.8 10.36,-15.5 C11.8,-10 10.2,1.5 8.6,7.5 C7.2,14.5 3.8,18.8 0,20.0 C-3.8,18.8 -7.2,14.6 -8.6,7.3 C-10.3,1.2 -11.8,-10 -10.36,-15.8 Z", detail:"M-5,-6 C-2,-4 2,-4 5,-6 M-3,5 C-1,4 1,4 3,5", highlight:"M-5,-13 C-2,-16 3,-16 5,-13 C2,-11 -2,-11 -5,-13 Z" }),
    LRP: Object.freeze({ outline:"M-10.36,-15.8 C-7.56,-18.0 -3.6,-18.6 0,-18.0 C4,-18.6 7.56,-17.8 10.36,-15.5 C11.8,-10 10.2,1.5 8.6,7.5 C7.2,14.5 3.8,18.8 0,20.0 C-3.8,18.8 -7.2,14.6 -8.6,7.3 C-10.3,1.2 -11.8,-10 -10.36,-15.8 Z", detail:"M-5,-6 C-2,-4 2,-4 5,-6 M-3,5 C-1,4 1,4 3,5", highlight:"M-5,-13 C-2,-16 3,-16 5,-13 C2,-11 -2,-11 -5,-13 Z" }),
    LRQ: Object.freeze({ outline:"M-9.48,-14.8 C-7.4,-18.2 -3.2,-19.0 0,-18.2 C3.5,-19.0 7.3,-18.0 9.48,-15.3 C10.5,-8.5 9.2,1.4 7.8,6.7 C6.3,12.5 3.2,17.5 0,18.3 C-3.2,17.5 -6.2,12.5 -7.8,6.5 C-9.2,1.2 -10.5,-8.7 -9.48,-14.8 Z", detail:"M-4,-6 C-2,-4 2,-4 4,-6 M-2.5,5 C-1,4 1,4 2.5,5", highlight:"M-5,-13 C-2,-16 3,-16 5,-13 C2,-11 -2,-11 -5,-13 Z" }),
    LRR: Object.freeze({ outline:"M-10.4,-14.5 C-7.8,-18.5 -3,-20.2 0,-19.2 C3.3,-20.1 7.8,-18.1 10.4,-14 C11.4,-7.5 9.8,2.2 8.4,8.2 C6.4,14 3.8,18.1 1.8,19.7 L0,20.5 L-2,19.5 C-4.2,17.8 -6.8,13.8 -8.4,8 C-9.8,2 -11.4,-7.8 -10.4,-14.5 Z", detail:"M-5,-5 C-2,-3 0,-2 0,-5 C2,-2 4,-3 5,-5 M0,-5 L0,7", highlight:"M-5,-11 C-2,-15 3,-15 5,-11 C2,-9 -2,-9 -5,-11 Z" }),
    LRS: Object.freeze({ outline:"M-16.62,-15.0 C-12.72,-19.2 -7.5,-20.2 -3.5,-18.1 C-1,-17 1.6,-17.2 4.2,-18.2 C8.5,-20 13.2,-18.8 16.62,-14.5 C17.8,-8.2 17.2,0.2 15.9,6.2 C14.4,12.2 10.5,16 5.2,16.5 C2.2,17.7 -2.4,17.7 -5.5,16.5 C-11,15.8 -14.4,11.8 -16,5.8 C-17.3,0 -17.8,-8.4 -16.62,-15.0 Z", detail:"M-9,-7 C-6,-4 -3,-3 0,-5 C3,-3 6,-4 9,-7 M-9,3 C-6,5 -3,5 0,3 C3,5 6,5 9,3 M0,-5 L0,3", highlight:"M-9,-11 C-5,-15 4,-15 9,-11 C5,-8 -5,-8 -9,-11 Z" }),
    LRT: Object.freeze({ outline:"M-18.04,-15.0 C-12.94,-19.2 -7.5,-20.2 -3.5,-18.1 C-1,-17 1.6,-17.2 4.2,-18.2 C8.5,-20 13.2,-18.8 18.04,-14.5 C19,-8.2 18.4,0.2 17.1,6.2 C15.6,12.2 10.5,16 5.2,16.5 C2.2,17.7 -2.4,17.7 -5.5,16.5 C-11,15.8 -15.6,11.8 -17.2,5.8 C-18.5,0 -19,-8.4 -18.04,-15.0 Z", detail:"M-10,-7 C-7,-4 -4,-3 -1,-5 C2,-3 5,-4 9,-7 M-10,2 C-6,5 -3,5 0,3 C3,5 6,5 10,2 M-3,-5 C-4,-1 -3,2 0,3 M5,-6 C3,-2 3,1 4,4", highlight:"M-9,-11 C-5,-15 4,-15 9,-11 C5,-8 -5,-8 -9,-11 Z" })
  });

  const TOOTH_ARTWORK = Object.freeze({
    UR8: Object.freeze({
      outline:"M-21.33,-21.5 C-17.55,-28.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 17.75,-26.8 21.35,-21.8 C24.5,-15.2 23.9,-6.5 22.1,1.3 C20,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,26.3 -0.2,26.2 C-4.5,26.5 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -19.8,10.7 -22,1.0 C-23.8,-6.8 -24.4,-15.5 -21.35,-21.5 Z",
      detail:"M-11,-9 C-7,-5 -4,-4 -1,-6 C2,-4 5,-5 9,-8 M-11,2 C-7,6 -4,6 -1,4 C2,2 5,4 9,6 M-1,-6 C-2,-1 -2,2 -1,4",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    UR7: Object.freeze({
      outline:"M-24.04,-22.8 C-18,-27.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 18.2,-26.8 24,-21.8 C26.7,-15.2 26.1,-6.5 24.3,1.3 C22.2,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,27.7 -0.2,27.6 C-4.5,27.9 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -22,10.7 -24.2,1.0 C-26,-6.8 -26.6,-15.5 -24,-22.8 Z",
      detail:"M-13,-10 C-9,-6 -5,-5 -2,-7 C1,-4 5,-5 11,-9 M-13,2 C-9,6 -6,7 -2,5 C1,3 4,4 7,7 C10,8 12,6 13,3 M-3,-7 C-4,-2 -3,2 -2,5 M7,-8 C5,-3 5,2 7,7",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    UR6: Object.freeze({
      outline:"M-25.99,-23.6 C-18.45,-27.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 18.65,-26.8 26.05,-21.8 C28.3,-15.2 27.7,-6.5 25.9,1.3 C23.8,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,28.4 -0.2,28.3 C-4.5,28.6 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -23.6,10.7 -25.8,1.0 C-27.6,-6.8 -28.2,-15.5 -26.05,-23.6 Z",
      detail:"M-14,-11 C-10,-6 -6,-4 -2,-7 C1,-4 5,-5 11,-10 M-15,1 C-10,5 -7,7 -3,5 C0,2 3,3 6,7 C9,9 12,7 15,3 M-4,-7 C-5,-2 -4,3 -3,5 M6,-8 C4,-3 4,2 6,7 M-11,-1 C-6,-1 -2,1 0,3 C2,1 7,0 12,0",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    UR5: Object.freeze({
      outline:"M-20.68,-21.7 C-15.1,-26.6 -7.0,-27 -1.0,-24.8 C4.8,-26.6 14.6,-25.6 20.6,-21.3 C21.7,-14.8 21.3,-6.0 19.5,2.2 C17.5,12.0 13.4,20.0 7.7,24.5 C4.6,27.0 1.8,28 -0.4,27.8 C-3.2,27.8 -7.0,26.0 -9.6,23.7 C-15.0,19.0 -17.5,11.2 -19.5,2.0 C-21.3,-6.1 -21.7,-15.0 -20.6,-21.7 Z",
      detail:"M-10,-8 C-6,-3 -3,-2 0,-5 C3,-2 6,-3 10,-8 M-8,7 C-4,3 -2,3 0,6 C2,3 5,3 8,7 M0,-5 L0,10",
      highlight:"M-10,-15 C-5,-21 4,-21 10,-15 C5,-12 -5,-12 -10,-15 Z"
    }),
    UR4: Object.freeze({
      outline:"M-17.80,-22.8 C-13.3,-27.3 -7.0,-27 -1.0,-24.8 C4.8,-25.9 12.8,-25.6 17.9,-21.3 C20.8,-14.8 20.4,-6.0 18.6,2.2 C16.6,12.0 13.4,20.0 7.7,24.5 C4.6,27.0 1.8,28 -0.4,27.8 C-3.2,27.8 -7.0,26.0 -9.6,23.7 C-15.0,19.0 -16.6,11.2 -18.6,2.0 C-20.4,-6.1 -20.8,-15.0 -17.9,-22.8 Z",
      detail:"M-10,-9 C-6,-4 -3,-2 0,-6 C3,-2 6,-4 10,-9 M0,-6 C-2,0 -2,7 0,12 C2,7 2,0 0,-6 M-8,7 C-4,4 -2,4 0,6 C2,4 5,4 8,7",
      highlight:"M-10,-15 C-5,-21 4,-21 10,-15 C5,-12 -5,-12 -10,-15 Z"
    }),
    UR3: Object.freeze({
      outline:"M-15.87,-23.8 C-10.55,-28.8 -4.7,-31.2 0,-30.0 C5.1,-31.0 10.55,-28.4 15.75,-23.2 C17.9,-14.6 16,-4 14.1,5.3 C12.1,15.8 8.4,25.2 3.9,30.0 L0,35.5 L-4.2,29.7 C-8.7,24.8 -12.2,15.5 -14.2,5.0 C-16.1,-4.3 -18,-14.9 -15.75,-23.8 Z",
      detail:"M-8,-9 C-4,-6 -1.18,-4 0,-7 C2,-4 5,-6 8,-9 M0,-7 L0,11",
      highlight:"M-7,-19 C-3,-24 2,-25 7,-20 C3,-17 -3,-16 -7,-19 Z"
    }),
    UR2: Object.freeze({
      outline:"M-15.66,-26.4 C-10.2,-29.6 -4.3,-31 0,-29.8 C4.8,-30.8 10.3,-29 15.8,-25.2 C17,-16.1 15.7,-6.2 13.8,3.2 C12.2,13.5 8.7,22.7 4.5,30 C2.1,32.5 -1.9,32.5 -4.4,30.2 C-8.5,22.8 -12.2,13.7 -14,3.1 C-15.7,-6 -17,-16.4 -15.8,-26.4 Z",
      detail:"M-6,-10 C-3,-7 -1.52,-6 0,-7 C2,-6 4,-7 6,-10 M-3,8 C-1,6 2,6 4,8",
      highlight:"M-6.5,-22 C-3,-26 4,-26 6.5,-21 C4,-18 -4,-18 -6.5,-22 Z"
    }),
    UR1: Object.freeze({
      outline:"M-18.81,-28.5 C-12.95,-32.2 -5.8,-33.4 0,-32.4 C6.3,-33.5 13.25,-31.8 18.65,-28 C19.9,-18.4 18.1,-7.1 16.1,3 C14,15.2 10.6,25.1 5.6,32 C2.8,34.8 -2.2,34.7 -5.4,31.9 C-10.7,25 -14.1,15 -16.2,2.8 C-18.1,-7.2 -19.9,-18.8 -18.65,-28.5 Z",
      detail:"M-8,-10 C-4,-7 -0.48,-6 0,-7 C2,-6 5,-7 8,-10 M-5,7 C-2,5 2,5 5,7",
      highlight:"M-7.5,-22 C-3,-26 4,-26 8.5,-21 C4,-18 -4,-18 -7.5,-22 Z"
    }),
    UL1: Object.freeze({
      outline:"M-17.12,-28.5 C-11.6,-32.2 -5.8,-33.4 0,-32.4 C6.3,-33.5 11.9,-31.8 17.3,-28 C19.9,-18.4 18.1,-7.1 16.1,3 C14,15.2 10.6,25.1 5.6,32 C2.8,34.8 -2.2,34.7 -5.4,31.9 C-10.7,25 -14.1,15 -16.2,2.8 C-18.1,-7.2 -19.9,-18.8 -17.3,-28.5 Z",
      detail:"M-8,-10 C-4,-7 -1.18,-6 0,-7 C2,-6 5,-7 8,-10 M-5,7 C-2,5 2,5 5,7",
      highlight:"M-8.5,-22 C-3,-26 4,-26 7.5,-21 C4,-18 -4,-18 -8.5,-22 Z"
    }),
    UL2: Object.freeze({
      outline:"M-16.90,-26.4 C-11.1,-29.6 -4.3,-31 0,-29.8 C4.8,-30.8 11.2,-29 16.7,-25.2 C17,-16.1 15.7,-6.2 13.8,3.2 C12.2,13.5 8.7,22.7 4.5,30 C2.1,32.5 -1.9,32.5 -4.4,30.2 C-8.5,22.8 -12.2,13.7 -14,3.1 C-15.7,-6 -17,-16.4 -16.7,-26.4 Z",
      detail:"M-6,-10 C-3,-7 -0.82,-6 0,-7 C2,-6 4,-7 6,-10 M-3,8 C-1,6 2,6 4,8",
      highlight:"M-6.5,-22 C-3,-26 4,-26 6.5,-21 C4,-18 -4,-18 -6.5,-22 Z"
    }),
    UL3: Object.freeze({
      outline:"M-16.43,-23.8 C-11.45,-28.8 -4.7,-31.2 0,-30.0 C5.1,-31.0 11.45,-28.4 16.65,-23.2 C17.9,-14.6 16,-4 14.1,5.3 C12.1,15.8 8.4,25.2 3.9,30.0 L0,35.5 L-4.2,29.7 C-8.7,24.8 -12.2,15.5 -14.2,5.0 C-16.1,-4.3 -18,-14.9 -16.65,-23.8 Z",
      detail:"M-8,-9 C-4,-6 -0.48,-4 0,-7 C2,-4 5,-6 8,-9 M0,-7 L0,11",
      highlight:"M-7,-19 C-3,-24 2,-25 7,-20 C3,-17 -3,-16 -7,-19 Z"
    }),
    UL4: Object.freeze({
      outline:"M-19.04,-22.8 C-14.2,-27.3 -7.0,-27 -1.0,-24.8 C4.8,-25.9 13.7,-25.6 18.8,-21.3 C20.8,-14.8 20.4,-6.0 18.6,2.2 C16.6,12.0 13.4,20.0 7.7,24.5 C4.6,27.0 1.8,28 -0.4,27.8 C-3.2,27.8 -7.0,26.0 -9.6,23.7 C-15.0,19.0 -16.6,11.2 -18.6,2.0 C-20.4,-6.1 -20.8,-15.0 -18.8,-22.8 Z",
      detail:"M-10,-9 C-6,-4 -3,-2 0,-6 C3,-2 6,-4 10,-9 M0,-6 C-2,0 -2,7 0,12 C2,7 2,0 0,-6 M-8,7 C-4,4 -2,4 0,6 C2,4 5,4 8,7",
      highlight:"M-10,-15 C-5,-21 4,-21 10,-15 C5,-12 -5,-12 -10,-15 Z"
    }),
    UL5: Object.freeze({
      outline:"M-18.99,-21.7 C-13.75,-26.6 -7.0,-27 -1.0,-24.8 C4.8,-26.6 13.25,-25.6 19.25,-21.3 C21.7,-14.8 21.3,-6.0 19.5,2.2 C17.5,12.0 13.4,20.0 7.7,24.5 C4.6,27.0 1.8,28 -0.4,27.8 C-3.2,27.8 -7.0,26.0 -9.6,23.7 C-15.0,19.0 -17.5,11.2 -19.5,2.0 C-21.3,-6.1 -21.7,-15.0 -19.25,-21.7 Z",
      detail:"M-10,-8 C-6,-3 -3,-2 0,-5 C3,-2 6,-3 10,-8 M-8,7 C-4,3 -2,3 0,6 C2,3 5,3 8,7 M0,-5 L0,10",
      highlight:"M-10,-15 C-5,-21 4,-21 10,-15 C5,-12 -5,-12 -10,-15 Z"
    }),
    UL6: Object.freeze({
      outline:"M-24.98,-23.6 C-17.1,-27.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 17.3,-26.8 24.7,-21.8 C28.3,-15.2 27.7,-6.5 25.9,1.3 C23.8,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,28.4 -0.2,28.3 C-4.5,28.6 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -23.6,10.7 -25.8,1.0 C-27.6,-6.8 -28.2,-15.5 -24.7,-23.6 Z",
      detail:"M-14,-11 C-10,-6 -6,-4 -2,-7 C1,-4 5,-5 11,-10 M-15,1 C-10,5 -7,7 -3,5 C0,2 3,3 6,7 C9,9 12,7 15,3 M-4,-7 C-5,-2 -4,3 -3,5 M6,-8 C4,-3 4,2 6,7 M-11,-1 C-6,-1 -2,1 0,3 C2,1 7,0 12,0",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    UL7: Object.freeze({
      outline:"M-24.60,-22.8 C-18.9,-27.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 19.1,-26.8 24.9,-21.8 C26.7,-15.2 26.1,-6.5 24.3,1.3 C22.2,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,27.7 -0.2,27.6 C-4.5,27.9 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -22,10.7 -24.2,1.0 C-26,-6.8 -26.6,-15.5 -24.9,-22.8 Z",
      detail:"M-13,-10 C-9,-6 -5,-5 -2,-7 C1,-4 5,-5 11,-9 M-13,2 C-9,6 -6,7 -2,5 C1,3 4,4 7,7 C10,8 12,6 13,3 M-3,-7 C-4,-2 -3,2 -2,5 M7,-8 C5,-3 5,2 7,7",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    UL8: Object.freeze({
      outline:"M-22.57,-21.5 C-18.45,-28.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 18.65,-26.8 22.25,-21.8 C24.5,-15.2 23.9,-6.5 22.1,1.3 C20,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,26.3 -0.2,26.2 C-4.5,26.5 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -19.8,10.7 -22,1.0 C-23.8,-6.8 -24.4,-15.5 -22.25,-21.5 Z",
      detail:"M-11,-9 C-7,-5 -4,-4 -1,-6 C2,-4 5,-5 9,-8 M-11,2 C-7,6 -4,6 -1,4 C2,2 5,4 9,6 M-1,-6 C-2,-1 -2,2 -1,4",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    LR8: Object.freeze({
      outline:"M-20.76,-21.5 C-18,-28.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 18.2,-26.8 21.1,-21.8 C23.8,-15.2 23.2,-6.5 21.4,1.3 C19.3,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,26.3 -0.2,26.2 C-4.5,26.5 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -19.1,10.7 -21.3,1.0 C-23.1,-6.8 -23.7,-15.5 -21.1,-21.5 Z",
      detail:"M-11,-9 C-7,-5 -4,-4 -1,-6 C2,-4 5,-5 9,-8 M-11,2 C-7,6 -4,6 -1,4 C2,2 5,4 9,6 M-1,-6 C-2,-1 -2,2 -1,4",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    LR7: Object.freeze({
      outline:"M-24.21,-22.8 C-18.45,-27.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 18.65,-26.8 23.85,-21.8 C26.1,-15.2 25.5,-6.5 23.7,1.3 C21.6,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,27.7 -0.2,27.6 C-4.5,27.9 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -21.4,10.7 -23.6,1.0 C-25.4,-6.8 -26,-15.5 -23.85,-22.8 Z",
      detail:"M-13,-10 C-9,-6 -5,-5 -2,-7 C1,-4 5,-5 11,-9 M-13,2 C-9,6 -6,7 -2,5 C1,3 4,4 7,7 C10,8 12,6 13,3 M-3,-7 C-4,-2 -3,2 -2,5 M7,-8 C5,-3 5,2 7,7",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    LR6: Object.freeze({
      outline:"M-25.32,-23.6 C-18.9,-27.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 19.1,-26.8 25.7,-21.8 C27.5,-15.2 26.9,-6.5 25.1,1.3 C23,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,28.4 -0.2,28.3 C-4.5,28.6 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -22.8,10.7 -25,1.0 C-26.8,-6.8 -27.4,-15.5 -25.7,-23.6 Z",
      detail:"M-14,-10 C-10,-6 -7,-5 -3,-7 C0,-4 4,-5 10,-9 M-15,1 C-11,5 -8,7 -4,5 C-1,2 2,3 5,7 C8,9 12,7 15,3 M-6,-7 C-5,-1 -5,4 -4,6 M4,-8 C3,-3 4,2 5,7 M-12,-1 C-7,0 -3,1 0,3 C3,1 7,0 12,1",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    LR5: Object.freeze({
      outline:"M-18.00,-21.7 C-13.3,-26.6 -7.0,-27 -1.0,-24.8 C4.8,-26.6 12.8,-25.6 17.6,-21.3 C20.5,-14.8 20.1,-6.0 18.3,2.2 C16.3,12.0 13.4,20.0 7.7,24.5 C4.6,27.0 1.8,26.5 -0.4,26.3 C-3.2,26.3 -7.0,26.0 -9.6,23.7 C-15.0,19.0 -16.3,11.2 -18.3,2.0 C-20.1,-6.1 -20.5,-15.0 -17.6,-21.7 Z",
      detail:"M-10,-8 C-6,-3 -3,-2 0,-5 C3,-2 6,-3 10,-8 M-8,7 C-4,3 -2,3 0,6 C2,3 5,3 8,7 M0,-5 L0,10",
      highlight:"M-10,-15 C-5,-21 4,-21 10,-15 C5,-12 -5,-12 -10,-15 Z"
    }),
    LR4: Object.freeze({
      outline:"M-16.33,-22.8 C-13.75,-27.3 -7.0,-27 -1.0,-24.8 C4.8,-25.9 13.25,-25.6 16.75,-21.3 C19.2,-14.8 18.8,-6.0 17,2.2 C15,12.0 13.4,20.0 7.7,24.5 C4.6,27.0 1.8,26.5 -0.4,26.3 C-3.2,26.3 -7.0,26.0 -9.6,23.7 C-15.0,19.0 -15,11.2 -17,2.0 C-18.8,-6.1 -19.2,-15.0 -16.75,-22.8 Z",
      detail:"M-10,-9 C-6,-4 -3,-2 0,-6 C3,-2 6,-4 10,-9 M0,-6 C-2,0 -2,7 0,12 C2,7 2,0 0,-6 M-8,7 C-4,4 -2,4 0,6 C2,4 5,4 8,7",
      highlight:"M-10,-15 C-5,-21 4,-21 10,-15 C5,-12 -5,-12 -10,-15 Z"
    }),
    LR3: Object.freeze({
      outline:"M-15.34,-23.8 C-11,-28.8 -4.7,-31.2 0,-30.0 C5.1,-31.0 11,-28.4 14.9,-23.2 C16.6,-14.6 14.7,-4 12.8,5.3 C10.8,15.8 8.4,25.2 3.9,30.0 L0,32.5 L-4.2,29.7 C-8.7,24.8 -10.9,15.5 -12.9,5.0 C-14.8,-4.3 -16.7,-14.9 -14.9,-23.8 Z",
      detail:"M-8,-9 C-4,-6 -1.18,-4 0,-7 C2,-4 5,-6 8,-9 M0,-7 L0,11",
      highlight:"M-7,-19 C-3,-24 2,-25 7,-20 C3,-17 -3,-16 -7,-19 Z"
    }),
    LR2: Object.freeze({
      outline:"M-13.79,-23.3 C-10.65,-29.6 -4.3,-31 0,-29.8 C4.8,-30.8 10.75,-29 14.25,-25.2 C15,-16.1 13.7,-6.2 11.8,3.2 C10.2,13.5 8.7,22.7 4.5,27.2 C2.1,29.7 -1.9,29.7 -4.4,27.4 C-8.5,22.8 -10.2,13.7 -12,3.1 C-13.7,-6 -15,-16.4 -14.25,-23.3 Z",
      detail:"M-6,-10 C-3,-7 -1.52,-6 0,-7 C2,-6 4,-7 6,-10 M-3,8 C-1,6 2,6 4,8",
      highlight:"M-6,-22 C-3,-26 4,-26 7,-21 C4,-18 -4,-18 -6,-22 Z"
    }),
    LR1: Object.freeze({
      outline:"M-16.68,-25 C-13.4,-32.2 -5.8,-33.4 0,-32.4 C6.3,-33.5 13.7,-31.8 16.2,-28 C17,-18.4 15.2,-7.1 13.2,3 C11.1,15.2 10.6,25.1 5.6,29 C2.8,31.8 -2.2,31.7 -5.4,28.9 C-10.7,25 -11.2,15 -13.3,2.8 C-15.2,-7.2 -17,-18.8 -16.2,-25 Z",
      detail:"M-8,-10 C-4,-7 -0.48,-6 0,-7 C2,-6 5,-7 8,-10 M-5,7 C-2,5 2,5 5,7",
      highlight:"M-8.5,-22 C-3,-26 4,-26 7.5,-21 C4,-18 -4,-18 -8.5,-22 Z"
    }),
    LL1: Object.freeze({
      outline:"M-15.70,-25 C-13.4,-32.2 -5.8,-33.4 0,-32.4 C6.3,-33.5 13.7,-31.8 16.2,-28 C17,-18.4 15.2,-7.1 13.2,3 C11.1,15.2 10.6,25.1 5.6,29 C2.8,31.8 -2.2,31.7 -5.4,28.9 C-10.7,25 -11.2,15 -13.3,2.8 C-15.2,-7.2 -17,-18.8 -16.2,-25 Z",
      detail:"M-8,-10 C-4,-7 -1.18,-6 0,-7 C2,-6 5,-7 8,-10 M-5,7 C-2,5 2,5 5,7",
      highlight:"M-8,-22 C-3,-26 4,-26 8,-21 C4,-18 -4,-18 -8,-22 Z"
    }),
    LL2: Object.freeze({
      outline:"M-14.77,-23.3 C-10.65,-29.6 -4.3,-31 0,-29.8 C4.8,-30.8 10.75,-29 14.25,-25.2 C15,-16.1 13.7,-6.2 11.8,3.2 C10.2,13.5 8.7,22.7 4.5,27.2 C2.1,29.7 -1.9,29.7 -4.4,27.4 C-8.5,22.8 -10.2,13.7 -12,3.1 C-13.7,-6 -15,-16.4 -14.25,-23.3 Z",
      detail:"M-6,-10 C-3,-7 -0.82,-6 0,-7 C2,-6 4,-7 6,-10 M-3,8 C-1,6 2,6 4,8",
      highlight:"M-6,-22 C-3,-26 4,-26 7,-21 C4,-18 -4,-18 -6,-22 Z"
    }),
    LL3: Object.freeze({
      outline:"M-14.36,-23.8 C-11,-28.8 -4.7,-31.2 0,-30.0 C5.1,-31.0 11,-28.4 14.9,-23.2 C16.6,-14.6 14.7,-4 12.8,5.3 C10.8,15.8 8.4,25.2 3.9,30.0 L0,32.5 L-4.2,29.7 C-8.7,24.8 -10.9,15.5 -12.9,5.0 C-14.8,-4.3 -16.7,-14.9 -14.9,-23.8 Z",
      detail:"M-8,-9 C-4,-6 -0.48,-4 0,-7 C2,-4 5,-6 8,-9 M0,-7 L0,11",
      highlight:"M-7,-19 C-3,-24 2,-25 7,-20 C3,-17 -3,-16 -7,-19 Z"
    }),
    LL4: Object.freeze({
      outline:"M-17.31,-22.8 C-13.75,-27.3 -7.0,-27 -1.0,-24.8 C4.8,-25.9 13.25,-25.6 16.75,-21.3 C19.2,-14.8 18.8,-6.0 17,2.2 C15,12.0 13.4,20.0 7.7,24.5 C4.6,27.0 1.8,26.5 -0.4,26.3 C-3.2,26.3 -7.0,26.0 -9.6,23.7 C-15.0,19.0 -15,11.2 -17,2.0 C-18.8,-6.1 -19.2,-15.0 -16.75,-22.8 Z",
      detail:"M-10,-9 C-6,-4 -3,-2 0,-6 C3,-2 6,-4 10,-9 M0,-6 C-2,0 -2,7 0,12 C2,7 2,0 0,-6 M-8,7 C-4,4 -2,4 0,6 C2,4 5,4 8,7",
      highlight:"M-10,-15 C-5,-21 4,-21 10,-15 C5,-12 -5,-12 -10,-15 Z"
    }),
    LL5: Object.freeze({
      outline:"M-17.02,-21.7 C-13.3,-26.6 -7.0,-27 -1.0,-24.8 C4.8,-26.6 12.8,-25.6 17.6,-21.3 C20.5,-14.8 20.1,-6.0 18.3,2.2 C16.3,12.0 13.4,20.0 7.7,24.5 C4.6,27.0 1.8,26.5 -0.4,26.3 C-3.2,26.3 -7.0,26.0 -9.6,23.7 C-15.0,19.0 -16.3,11.2 -18.3,2.0 C-20.1,-6.1 -20.5,-15.0 -17.6,-21.7 Z",
      detail:"M-10,-8 C-6,-3 -3,-2 0,-5 C3,-2 6,-3 10,-8 M-8,7 C-4,3 -2,3 0,6 C2,3 5,3 8,7 M0,-5 L0,10",
      highlight:"M-10,-15 C-5,-21 4,-21 10,-15 C5,-12 -5,-12 -10,-15 Z"
    }),
    LL6: Object.freeze({
      outline:"M-26.30,-23.6 C-18.9,-27.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 19.1,-26.8 25.7,-21.8 C27.5,-15.2 26.9,-6.5 25.1,1.3 C23,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,28.4 -0.2,28.3 C-4.5,28.6 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -22.8,10.7 -25,1.0 C-26.8,-6.8 -27.4,-15.5 -25.7,-23.6 Z",
      detail:"M-14,-10 C-10,-6 -7,-5 -3,-7 C0,-4 4,-5 10,-9 M-15,1 C-11,5 -8,7 -4,5 C-1,2 2,3 5,7 C8,9 12,7 15,3 M-6,-7 C-5,-1 -5,4 -4,6 M4,-8 C3,-3 4,2 5,7 M-12,-1 C-7,0 -3,1 0,3 C3,1 7,0 12,1",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    LL7: Object.freeze({
      outline:"M-23.23,-22.8 C-18.45,-27.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 18.65,-26.8 23.85,-21.8 C26.1,-15.2 25.5,-6.5 23.7,1.3 C21.6,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,27.7 -0.2,27.6 C-4.5,27.9 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -21.4,10.7 -23.6,1.0 C-25.4,-6.8 -26,-15.5 -23.85,-22.8 Z",
      detail:"M-13,-10 C-9,-6 -5,-5 -2,-7 C1,-4 5,-5 11,-9 M-13,2 C-9,6 -6,7 -2,5 C1,3 4,4 7,7 C10,8 12,6 13,3 M-3,-7 C-4,-2 -3,2 -2,5 M7,-8 C5,-3 5,2 7,7",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    }),
    LL8: Object.freeze({
      outline:"M-21.74,-21.5 C-18,-28.7 -11.0,-28.5 -5.2,-26.1 C-2.1,-24.8 1.4,-25.0 5.1,-26.3 C11.4,-28.4 18.2,-26.8 21.1,-21.8 C23.8,-15.2 23.2,-6.5 21.4,1.3 C19.3,11.2 18.0,18.9 11.7,23.5 C7.5,26.6 3.4,26.3 -0.2,26.2 C-4.5,26.5 -8.8,26.0 -12.4,23.1 C-18.2,18.4 -19.1,10.7 -21.3,1.0 C-23.1,-6.8 -23.7,-15.5 -21.1,-21.5 Z",
      detail:"M-11,-9 C-7,-5 -4,-4 -1,-6 C2,-4 5,-5 9,-8 M-11,2 C-7,6 -4,6 -1,4 C2,2 5,4 9,6 M-1,-6 C-2,-1 -2,2 -1,4",
      highlight:"M-13,-16 C-7,-21 5,-22 13,-16 C7,-12 -6,-12 -13,-16 Z"
    })
  });

  const CSS = `
#odontogram-mount {
  --odv2-teal: #4f9f87;
  --odv2-teal-dark: #2e7562;
  --odv2-text: #18373b;
  --odv2-muted: #818b8b;
  --odv2-line: #edf0ee;
  --odv2-card: #fcfdfc;
  width: 100%;
  color: var(--odv2-text);
  font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
#odontogram-mount *, #odontogram-mount *::before, #odontogram-mount *::after { box-sizing: border-box; }
.odv2-card {
  width: 100%;
  padding: 8px 10px 13px;
  border-radius: 8px;
  background: var(--odv2-card);
}
.odv2-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 28px;
}
.odv2-title {
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 650;
  letter-spacing: -.01em;
}
.odv2-settings-wrap { position: relative; }
.odv2-icon-btn {
  width: 29px;
  height: 29px;
  padding: 6px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #929b98;
  cursor: pointer;
  transition: color .16s ease, background-color .16s ease, transform .16s ease;
}
.odv2-icon-btn:hover { background: #f1f5f3; color: var(--odv2-teal-dark); transform: rotate(8deg); }
.odv2-icon-btn:active { transform: rotate(8deg) scale(.94); }
.odv2-icon-btn svg { width: 17px; height: 17px; fill: currentColor; }
.odv2-menu {
  position: absolute;
  z-index: 50;
  top: 33px;
  right: 0;
  width: 204px;
  padding: 16px;
  border: 1px solid #edf1ef;
  border-radius: 9px;
  background: rgba(255,255,255,.98);
  box-shadow: 0 9px 24px rgba(35,64,56,.11);
  transform-origin: top right;
  animation: odv2-menu-in .16s ease-out;
}
@keyframes odv2-menu-in {
  from { opacity: 0; transform: translateY(-3px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.odv2-menu-title { margin-bottom: 11px; font-size: 13px; font-weight: 550; letter-spacing: -.01em; }
.odv2-segmented { display: inline-flex; }
.odv2-segmented button {
  min-width: 45px;
  padding: 6px 10px;
  border: 1px solid var(--odv2-teal);
  background: #fff;
  color: var(--odv2-teal-dark);
  font: inherit;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .02em;
  cursor: pointer;
  transition: background-color .14s ease, color .14s ease, transform .12s ease;
}
.odv2-segmented button:first-child { border-radius: 5px 0 0 5px; }
.odv2-segmented button:last-child { margin-left: -1px; border-radius: 0 5px 5px 0; }
.odv2-segmented button.is-active { background: var(--odv2-teal); color: #fff; }
.odv2-segmented button:active { transform: scale(.96); }
.odv2-toolbar { display: flex; justify-content: center; margin: 0; }
.odv2-full-mouth {
  padding: 9px 22px;
  border: 1px solid rgba(79,159,135,.85);
  border-radius: 5px;
  background: #fff;
  color: var(--odv2-teal-dark);
  font: inherit;
  font-size: 13px;
  font-weight: 550;
  cursor: pointer;
  transition: background-color .15s ease, border-color .15s ease, transform .12s ease, box-shadow .15s ease;
}
.odv2-full-mouth:hover { background: #f4faf7; border-color: var(--odv2-teal); box-shadow: 0 2px 8px rgba(79,159,135,.10); }
.odv2-full-mouth:active { transform: translateY(1px) scale(.985); box-shadow: none; }
.odv2-stage { width: 100%; margin-top: -3px; }
.odv2-svg { display: block; width: 100%; height: auto; overflow: visible; }
.odv2-arch { fill: none; stroke: var(--odv2-line); stroke-width: 1; }
.odv2-midline { stroke: #f0f2f1; stroke-width: .9; stroke-dasharray: 2.5 5; }
.odv2-quadrant {
  fill: var(--odv2-muted);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: .005em;
  cursor: pointer;
  user-select: none;
  transition: fill .15s ease, opacity .15s ease;
}
.odv2-quadrant-control {
  cursor: pointer;
  outline: none;
}
.odv2-quadrant-control:hover .odv2-quadrant,
.odv2-quadrant-control:focus .odv2-quadrant {
  fill: var(--odv2-green);
}
.odv2-quadrant-control.is-selected .odv2-quadrant {
  fill: var(--odv2-green);
  font-weight: 650;
}
.odv2-quadrant-hit {
  fill: rgba(255,255,255,.001);
  stroke: none;
  pointer-events: all;
}
.odv2-tooth { cursor: pointer; outline: none; }
.odv2-hit { fill: rgba(255,255,255,.001); stroke: none; pointer-events: all; }
.odv2-shape {
  pointer-events: none;
  fill: url(#odv2-tooth-gradient);
  stroke: #d8ddda;
  stroke-width: .82;
  vector-effect: non-scaling-stroke;
  transition: fill .17s ease, stroke .17s ease, stroke-width .17s ease, filter .17s ease;
}
.odv2-detail {
  pointer-events: none;
  fill: none;
  stroke: rgba(171,181,175,.35);
  stroke-width: .62;
  vector-effect: non-scaling-stroke;
  pointer-events: none;
  transition: stroke .17s ease;
}
.odv2-highlight {
  fill: rgba(255,255,255,.46);
  pointer-events: none;
  transition: opacity .17s ease;
}
.odv2-tooth {
  transition: transform .16s cubic-bezier(.2,.75,.35,1);
  transform-box: fill-box;
  transform-origin: center;
}
.odv2-tooth:hover .odv2-shape { stroke: #b9c3bd; filter: url(#odv2-hover-shadow); }
.odv2-tooth:hover .odv2-highlight { opacity: .82; }
.odv2-tooth.is-selected .odv2-shape {
  pointer-events: none;
  fill: url(#odv2-tooth-gradient);
  stroke: var(--odv2-teal);
  stroke-width: 2.15;
  filter: url(#odv2-selected-shadow);
}
.odv2-tooth.is-selected .odv2-detail { stroke: rgba(79,159,135,.42); }
.odv2-tooth:focus-visible .odv2-shape {
  stroke: var(--odv2-teal-dark);
  stroke-width: 2.35;
}
.odv2-number {
  fill: #727b7d;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: -.01em;
  pointer-events: none;
  dominant-baseline: middle;
  transition: fill .15s ease, font-weight .15s ease;
}
.odv2-number.is-selected { fill: var(--odv2-teal-dark); font-weight: 700; }
.odv2-chips {
  min-height: 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  padding-top: 0;
}
.odv2-primary-tooth { cursor: pointer; outline: none; }
.odv2-primary-shape {
  fill: url(#odv2-primary-gradient);
  stroke: #cbd3c9;
  stroke-width: 1.05;
  vector-effect: non-scaling-stroke;
  transition: fill .14s ease, stroke .14s ease, filter .14s ease;
}
.odv2-primary-detail {
  fill: none;
  stroke: #d5dbd2;
  stroke-width: .85;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
  pointer-events: none;
}
.odv2-primary-highlight { fill: rgba(255,255,255,.48); pointer-events: none; }
.odv2-primary-hit { fill: transparent; stroke: transparent; stroke-width: 9; pointer-events: all; }
.odv2-primary-tooth:hover .odv2-primary-shape,
.odv2-primary-tooth:focus .odv2-primary-shape {
  stroke: #8cae9f;
  filter: url(#odv2-hover-shadow);
}
.odv2-primary-tooth.is-selected .odv2-primary-shape {
  fill: #dff1ea;
  stroke: #4f9f87;
  stroke-width: 1.45;
  filter: url(#odv2-selected-shadow);
}
.odv2-primary-number {
  fill: var(--odv2-muted);
  font-size: 11px;
  font-weight: 600;
  text-anchor: middle;
  dominant-baseline: middle;
  pointer-events: none;
}
.odv2-primary-number.is-selected { fill: var(--odv2-green); font-weight: 700; }
.odv2-chip {
  min-width: 23px;
  height: 23px;
  padding: 0 7px;
  border: 0;
  border-radius: 999px;
  background: #64a991;
  color: #fff;
  font: inherit;
  font-size: 10.5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .14s ease, transform .12s ease, box-shadow .14s ease;
  animation: odv2-chip-in .16s ease-out;
}
@keyframes odv2-chip-in {
  from { opacity: 0; transform: scale(.84); }
  to { opacity: 1; transform: scale(1); }
}
.odv2-chip:hover { background: var(--odv2-teal-dark); box-shadow: 0 2px 7px rgba(46,117,98,.16); transform: translateY(-1px); }
.odv2-chip:active { transform: scale(.93); box-shadow: none; }
.odv2-icon-btn:focus-visible,
.odv2-full-mouth:focus-visible,
.odv2-segmented button:focus-visible,
.odv2-chip:focus-visible {
  outline: 2px solid var(--odv2-teal-dark);
  outline-offset: 2px;
}
.odv2-sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0,0,0,0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
@media (prefers-reduced-motion: reduce) {
  #odontogram-mount *, #odontogram-mount *::before, #odontogram-mount *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
@media (max-width: 520px) {
  .odv2-card { padding-inline: 2px; }
  .odv2-number { font-size: 10.7px; }
  .odv2-quadrant { font-size: 10.8px; }
  .odv2-menu { right: 2px; }
}
`;

  let mount, svg, settingsPanel, settingsButton, fullMouthButton, chips, liveRegion;
  const config = Object.freeze({
    selectedField: "control121592721",
    jsonField: "control121592722",
    defaultSystem: "universal"
  });

  const state = {
    system: "universal",
    selected: new Set()
  };

  const runtime = {
    fieldRetryCount: 0,
    fieldRetryTimer: null,
    observer: null,
    lastSelectedValue: null,
    lastJsonValue: null
  };

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function svgEl(name, attrs = {}) {
    const el = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v));
    return el;
  }

  function buildShell() {
    mount.innerHTML = `
      <section class="odv2-card" aria-labelledby="odv2-title">
        <div class="odv2-header">
          <h2 id="odv2-title" class="odv2-title">Teeth</h2>
          <div class="odv2-settings-wrap">
            <button type="button" class="odv2-icon-btn" aria-label="Tooth numbering settings"
              aria-expanded="false" aria-controls="odv2-menu">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 8.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm8.1 4.1v-1.6l-2-.7a7 7 0 0 0-.6-1.5l.9-1.9-1.1-1.1-1.9.9a7 7 0 0 0-1.5-.6l-.7-2h-1.6l-.7 2a7 7 0 0 0-1.5.6l-1.9-.9-1.1 1.1.9 1.9a7 7 0 0 0-.6 1.5l-2 .7v1.6l2 .7c.1.5.3 1 .6 1.5l-.9 1.9 1.1 1.1 1.9-.9c.5.3 1 .5 1.5.6l.7 2h1.6l.7-2c.5-.1 1-.3 1.5-.6l1.9.9 1.1-1.1-.9-1.9c.3-.5.5-1 .6-1.5l2-.7Z"/>
              </svg>
            </button>
            <div id="odv2-menu" class="odv2-menu" hidden>
              <div class="odv2-menu-title">Tooth Number System</div>
              <div class="odv2-segmented" role="radiogroup" aria-label="Tooth number system">
                <button type="button" data-system="universal" role="radio">UNS</button>
                <button type="button" data-system="fdi" role="radio">FDI</button>
              </div>
            </div>
          </div>
        </div>

        <div class="odv2-toolbar">
          <button type="button" class="odv2-full-mouth">Select full mouth</button>
        </div>

        <div class="odv2-stage">
          <svg class="odv2-svg" viewBox="0 0 760 760" role="group"
            aria-label="Interactive whole-tooth odontogram"></svg>
        </div>

        <div class="odv2-chips" aria-label="Selected teeth"></div>
        <div class="odv2-sr-only" aria-live="polite"></div>
      </section>
    `;

    svg = mount.querySelector(".odv2-svg");
    settingsPanel = mount.querySelector(".odv2-menu");
    settingsButton = mount.querySelector(".odv2-icon-btn");
    fullMouthButton = mount.querySelector(".odv2-full-mouth");
    chips = mount.querySelector(".odv2-chips");
    liveRegion = mount.querySelector(".odv2-sr-only");
  }

  function addDefs() {
    const defs = svgEl("defs");

    const grad = svgEl("linearGradient", { id:"odv2-tooth-gradient", x1:"0", y1:"0", x2:"0.75", y2:"1" });
    grad.append(
      svgEl("stop", { offset:"0%", "stop-color":"#fbfcfb" }),
      svgEl("stop", { offset:"58%", "stop-color":"#f5f7f5" }),
      svgEl("stop", { offset:"100%", "stop-color":"#eaeeeb" })
    );

    const hoverShadow = svgEl("filter", { id:"odv2-hover-shadow", x:"-25%", y:"-25%", width:"150%", height:"155%" });
    hoverShadow.append(svgEl("feDropShadow", {
      dx:"0", dy:"1.1", stdDeviation:"1.15", "flood-color":"#60756c", "flood-opacity":".10"
    }));

    const selectedShadow = svgEl("filter", { id:"odv2-selected-shadow", x:"-30%", y:"-30%", width:"160%", height:"165%" });
    selectedShadow.append(svgEl("feDropShadow", {
      dx:"0", dy:"1.2", stdDeviation:"1.35", "flood-color":"#4f9f87", "flood-opacity":".13"
    }));

    const primaryGrad = svgEl("linearGradient", { id:"odv2-primary-gradient", x1:"0", y1:"0", x2:"0.8", y2:"1" });
    primaryGrad.append(
      svgEl("stop", { offset:"0%", "stop-color":"#fcfdfb" }),
      svgEl("stop", { offset:"62%", "stop-color":"#f1f4ef" }),
      svgEl("stop", { offset:"100%", "stop-color":"#e4e9e2" })
    );

    defs.append(grad, primaryGrad, hoverShadow, selectedShadow);
    svg.append(defs);
  }

  function addGuidesAndLabels() {
    const guides = svgEl("g", { "aria-hidden":"true" });
    guides.append(
      svgEl("path", {
        class:"odv2-arch",
        d:smoothPathThroughPoints(GENERATED_POSITIONS.upper)
      }),
      svgEl("path", {
        class:"odv2-arch",
        d:smoothPathThroughPoints(GENERATED_POSITIONS.lower)
      }),
      svgEl("line", { class:"odv2-midline", x1:"380", y1:"74", x2:"380", y2:"686" })
    );
    svg.append(guides);

    const labels = [
      { key:"upperRight", text:"Upper Right", x:28,  y:222, anchor:"start", width:96 },
      { key:"upperLeft",  text:"Upper Left",  x:732, y:222, anchor:"end",   width:88 },
      { key:"lowerRight", text:"Lower Right", x:28,  y:610, anchor:"start", width:96 },
      { key:"lowerLeft",  text:"Lower Left",  x:732, y:610, anchor:"end",   width:88 }
    ];

    labels.forEach(item => {
      const group = svgEl("g", {
        class:"odv2-quadrant-control",
        "data-quadrant":item.key,
        role:"button",
        tabindex:"0",
        "aria-pressed":"false",
        "aria-label":`Select ${item.text} quadrant`
      });

      const hitX = item.anchor === "end"
        ? item.x - item.width - 6
        : item.x - 6;

      const hit = svgEl("rect", {
        class:"odv2-quadrant-hit",
        x:hitX,
        y:item.y - 20,
        width:item.width + 12,
        height:28,
        rx:5
      });

      const textNode = svgEl("text", {
        class:"odv2-quadrant",
        x:item.x,
        y:item.y,
        "text-anchor":item.anchor
      });
      textNode.textContent = item.text;

      group.append(hit, textNode);

      group.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        toggleQuadrant(item.key);
      });

      group.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          toggleQuadrant(item.key);
        }
      });

      svg.append(group);
    });
  }

  /*
   * Version 6 curve placement engine
   *
   * The V5.3 center coordinates remain the spacing reference. We calculate
   * each adjacent center-to-center distance once, then walk those exact
   * distances along four independent cubic Bezier curves.
   *
   * Editing ARCH_CURVES changes the arch silhouette without scaling teeth
   * or changing the prescribed spacing sequence.
   */
  const V53_REFERENCE = Object.freeze({
    upper: [
      {x:135.96,y:350.52,r:-2},{x:155.73,y:293.40,r:-7},
      {x:185.18,y:241.30,r:-12},{x:220.15,y:199.77,r:-18},
      {x:255.93,y:169.96,r:-23},{x:292.18,y:149.11,r:-27},
      {x:324.34,y:136.75,r:-16},{x:359.75,y:130.00,r:-3},
      {x:400.25,y:130.00,r:3},{x:435.66,y:136.75,r:16},
      {x:467.82,y:149.11,r:27},{x:504.07,y:169.96,r:23},
      {x:539.85,y:199.77,r:18},{x:574.82,y:241.30,r:12},
      {x:604.27,y:293.40,r:7},{x:624.04,y:350.52,r:2}
    ],
    lower: [
      {x:124.28,y:409.18,r:2},{x:144.39,y:467.28,r:7},
      {x:174.16,y:519.94,r:12},{x:208.27,y:560.46,r:18},
      {x:242.94,y:589.35,r:23},{x:278.12,y:609.58,r:27},
      {x:315.29,y:623.88,r:16},{x:357.95,y:632.00,r:3},
      {x:402.05,y:632.00,r:-3},{x:444.71,y:623.88,r:-16},
      {x:481.88,y:609.58,r:-27},{x:517.06,y:589.35,r:-23},
      {x:551.73,y:560.46,r:-18},{x:585.84,y:519.94,r:-12},
      {x:615.61,y:467.28,r:-7},{x:635.72,y:409.18,r:-2}
    ]
  });

  const ARCH_CURVES = Object.freeze({
    /*
     * Oval reference:
     * - tall on the y-axis
     * - narrow on the x-axis
     * - rounded continuously from incisors through posterior teeth
     * - upper and lower posterior endpoints remain separated
     */
    upperLeft: {
      p0:{x:359.75,y:88.00},
      p1:{x:244.00,y:88.00},
      p2:{x:153.00,y:203.00},
      p3:{x:153.00,y:354.00}
    },
    upperRight: {
      p0:{x:400.25,y:88.00},
      p1:{x:516.00,y:88.00},
      p2:{x:607.00,y:203.00},
      p3:{x:607.00,y:354.00}
    },
    lowerLeft: {
      p0:{x:357.95,y:672.00},
      p1:{x:242.00,y:672.00},
      p2:{x:153.00,y:557.00},
      p3:{x:153.00,y:406.00}
    },
    lowerRight: {
      p0:{x:402.05,y:672.00},
      p1:{x:518.00,y:672.00},
      p2:{x:607.00,y:557.00},
      p3:{x:607.00,y:406.00}
    }
  });

  function pointDistance(a, b) {
    return Math.hypot(b.x - a.x, b.y - a.y);
  }

  function cubicPoint(curve, t) {
    const mt = 1 - t;
    const a = mt * mt * mt;
    const b = 3 * mt * mt * t;
    const c = 3 * mt * t * t;
    const d = t * t * t;
    return {
      x: a*curve.p0.x + b*curve.p1.x + c*curve.p2.x + d*curve.p3.x,
      y: a*curve.p0.y + b*curve.p1.y + c*curve.p2.y + d*curve.p3.y
    };
  }

  function cubicDerivative(curve, t) {
    const mt = 1 - t;
    return {
      x: 3*mt*mt*(curve.p1.x-curve.p0.x)
        + 6*mt*t*(curve.p2.x-curve.p1.x)
        + 3*t*t*(curve.p3.x-curve.p2.x),
      y: 3*mt*mt*(curve.p1.y-curve.p0.y)
        + 6*mt*t*(curve.p2.y-curve.p1.y)
        + 3*t*t*(curve.p3.y-curve.p2.y)
    };
  }

  function normalizeAxialAngle(degrees) {
    let angle = degrees % 180;
    if (angle > 90) angle -= 180;
    if (angle <= -90) angle += 180;
    return angle;
  }

  function tangentRotation(curve, t) {
    const tangent = cubicDerivative(curve, t);
    return normalizeAxialAngle(Math.atan2(tangent.y, tangent.x) * 180 / Math.PI);
  }

  function smoothPathThroughPoints(points) {
    if (!points.length) return "";
    if (points.length === 1) return `M${points[0].x} ${points[0].y}`;

    let d = `M${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];

      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C${c1x.toFixed(2)} ${c1y.toFixed(2)}`
         + ` ${c2x.toFixed(2)} ${c2y.toFixed(2)}`
         + ` ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
    }
    return d;
  }

  function buildArcLut(curve, steps = 1200) {
    const lut = [{ t:0, length:0, point:cubicPoint(curve, 0) }];
    let total = 0;
    let previous = lut[0].point;

    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const point = cubicPoint(curve, t);
      total += pointDistance(previous, point);
      lut.push({ t, length:total, point });
      previous = point;
    }
    return { curve, lut, total };
  }

  function pointAtLength(arc, targetLength) {
    const target = Math.max(0, Math.min(targetLength, arc.total));
    let low = 0;
    let high = arc.lut.length - 1;

    while (low + 1 < high) {
      const mid = (low + high) >> 1;
      if (arc.lut[mid].length < target) low = mid;
      else high = mid;
    }

    const a = arc.lut[low];
    const b = arc.lut[high];
    const span = b.length - a.length || 1;
    const ratio = (target - a.length) / span;
    const t = a.t + (b.t - a.t) * ratio;
    return { point:cubicPoint(arc.curve, t), t };
  }

  function referenceStepDistances(points, startIndex, direction) {
    const distances = [];
    let index = startIndex;
    while (index + direction >= 0 && index + direction < points.length) {
      const next = index + direction;
      distances.push(pointDistance(points[index], points[next]));
      index = next;
    }
    return distances;
  }

  function placeSide(curve, reference, startIndex, direction) {
    const arc = buildArcLut(curve);
    const steps = referenceStepDistances(reference, startIndex, direction);
    const result = [];
    let cumulative = 0;

    const startTangent = cubicDerivative(curve, 0);
    result.push({
      x:curve.p0.x,
      y:curve.p0.y,
      r:tangentRotation(curve, 0),
      tx:startTangent.x,
      ty:startTangent.y,
      t:0,
      s:1
    });

    for (let i = 0; i < steps.length; i++) {
      cumulative += steps[i];
      if (cumulative > arc.total) {
        throw new Error("Odontogram V6 curve is shorter than its spacing sequence.");
      }

      const sample = pointAtLength(arc, cumulative);
      const tangent = cubicDerivative(curve, sample.t);
      result.push({
        x:sample.point.x,
        y:sample.point.y,
        r:tangentRotation(curve, sample.t),
        tx:tangent.x,
        ty:tangent.y,
        t:sample.t,
        s:1
      });
    }
    return result;
  }

  function createArchPositions() {
    const upperLeftOutward = placeSide(
      ARCH_CURVES.upperLeft, V53_REFERENCE.upper, 7, -1
    );
    const upperRightOutward = placeSide(
      ARCH_CURVES.upperRight, V53_REFERENCE.upper, 8, 1
    );
    const lowerLeftOutward = placeSide(
      ARCH_CURVES.lowerLeft, V53_REFERENCE.lower, 7, -1
    );
    const lowerRightOutward = placeSide(
      ARCH_CURVES.lowerRight, V53_REFERENCE.lower, 8, 1
    );

    return {
      upper: [
        ...upperLeftOutward.slice().reverse(),
        ...upperRightOutward
      ],
      lower: [
        ...lowerLeftOutward.slice().reverse(),
        ...lowerRightOutward
      ]
    };
  }

  const GENERATED_POSITIONS = createArchPositions();

  /*
   * Subtle anatomical variation, applied after tangent alignment.
   * Incisors and canines stay strictly tangent-aligned. Premolars and molars
   * receive alternating fractions of a degree so the arch remains natural
   * without looking mechanically identical.
   */
  const ANGULATION_VARIATION = Object.freeze({
    upper: [ 1.2,-0.8, 1.0,-0.7, 0.5,-0.4, 0,0, 0,0, 0.4,-0.5, 0.7,-1.0, 0.8,-1.2 ],
    lower: [-1.0, 0.7,-0.9, 0.6,-0.4, 0.3, 0,0, 0,0,-0.3, 0.4,-0.6, 0.9,-0.7, 1.0 ]
  });

  function positionFor(index, upper) {
    const row = upper ? "upper" : "lower";
    const p = GENERATED_POSITIONS[row][index];
    return {
      x:p.x,
      y:p.y,
      rotation:p.r + ANGULATION_VARIATION[row][index],
      tangentX:p.tx,
      tangentY:p.ty,
      scale:p.s
    };
  }

  function outwardNormalFor(pos) {
    const tangentLength = Math.hypot(pos.tangentX, pos.tangentY) || 1;
    const nxA = -pos.tangentY / tangentLength;
    const nyA =  pos.tangentX / tangentLength;
    const nxB = -nxA;
    const nyB = -nyA;

    const fromCenterX = pos.x - 380;
    const fromCenterY = pos.y - 380;
    const dotA = nxA*fromCenterX + nyA*fromCenterY;

    return dotA >= 0
      ? { x:nxA, y:nyA }
      : { x:nxB, y:nyB };
  }

  function numberOffsetForFamily(family) {
    if (family === "central") return 46;
    if (family === "lateral") return 44;
    if (family === "canine") return 47;
    if (family === "premolar") return 41;
    return 42;
  }


  function addTeeth() {
    TEETH.forEach((tooth, index) => {
      const upper = index < 16;
      const rowIndex = upper ? index : index - 16;
      const pos = positionFor(rowIndex, upper);

      const group = svgEl("g", {
        class:"odv2-tooth",
        "data-tooth-id":tooth.id,
        role:"button",
        tabindex:"0",
        "aria-pressed":"false",
        transform:`translate(${pos.x.toFixed(2)} ${pos.y.toFixed(2)}) rotate(${pos.rotation.toFixed(2)}) scale(${pos.scale.toFixed(3)})`
      });

      const artwork = TOOTH_ARTWORK[tooth.id];
      const hit = svgEl("path", { class:"odv2-hit", d:artwork.outline });
      const shape = svgEl("path", { class:"odv2-shape", d:artwork.outline });
      const highlight = svgEl("path", {
        class:"odv2-highlight",
        d:artwork.highlight
      });
      const detail = svgEl("path", { class:"odv2-detail", d:artwork.detail });

      group.append(hit, shape, highlight, detail);
      svg.append(group);

      const normal = outwardNormalFor(pos);
      const offset = numberOffsetForFamily(tooth.family);

      const number = svgEl("text", {
        class:"odv2-number",
        "data-number-for":tooth.id,
        x:(pos.x + normal.x*offset).toFixed(2),
        y:(pos.y + normal.y*offset).toFixed(2),
        "text-anchor":"middle"
      });
      svg.append(number);
    });
  }


  const PRIMARY_POSITIONS = Object.freeze({
    URA:{x:262,y:339,r:-5,s:1.00,nx:-1,ny:0},
    URB:{x:274,y:295,r:-18,s:.94,nx:-.82,ny:-.45},
    URC:{x:300,y:261,r:-32,s:.88,nx:-.72,ny:-.70},
    URD:{x:334,y:239,r:-17,s:.82,nx:-.42,ny:-.91},
    URE:{x:366,y:229,r:-5,s:.82,nx:-.16,ny:-.99},
    ULF:{x:394,y:229,r:5,s:.82,nx:.16,ny:-.99},
    ULG:{x:426,y:239,r:17,s:.82,nx:.42,ny:-.91},
    ULH:{x:460,y:261,r:32,s:.88,nx:.72,ny:-.70},
    ULI:{x:486,y:295,r:18,s:.94,nx:.82,ny:-.45},
    ULJ:{x:498,y:339,r:5,s:1.00,nx:1,ny:0},

    LLK:{x:498,y:421,r:-5,s:1.00,nx:1,ny:0},
    LLL:{x:486,y:465,r:-18,s:.94,nx:.82,ny:.45},
    LLM:{x:460,y:499,r:-32,s:.88,nx:.72,ny:.70},
    LLN:{x:426,y:521,r:-17,s:.82,nx:.42,ny:.91},
    LLO:{x:394,y:531,r:-5,s:.82,nx:.16,ny:.99},
    LRP:{x:366,y:531,r:5,s:.82,nx:-.16,ny:.99},
    LRQ:{x:334,y:521,r:17,s:.82,nx:-.42,ny:.91},
    LRR:{x:300,y:499,r:32,s:.88,nx:-.72,ny:.70},
    LRS:{x:274,y:465,r:18,s:.94,nx:-.82,ny:.45},
    LRT:{x:262,y:421,r:5,s:1.00,nx:-1,ny:0}
  });

  function addPrimaryTeeth() {
    PRIMARY_TEETH.forEach(tooth => {
      const pos = PRIMARY_POSITIONS[tooth.id];
      const artwork = PRIMARY_ARTWORK[tooth.id];
      const group = svgEl("g", {
        class:"odv2-primary-tooth",
        "data-tooth-id":tooth.id,
        role:"button",
        tabindex:"0",
        "aria-pressed":"false",
        transform:`translate(${pos.x} ${pos.y}) rotate(${pos.r}) scale(${pos.s})`
      });

      group.append(
        svgEl("path", { class:"odv2-primary-hit", d:artwork.outline }),
        svgEl("path", { class:"odv2-primary-shape", d:artwork.outline }),
        svgEl("path", { class:"odv2-primary-highlight", d:artwork.highlight }),
        svgEl("path", { class:"odv2-primary-detail", d:artwork.detail })
      );
      svg.append(group);

      const labelOffset = tooth.family === "molar" ? 37 : tooth.family === "canine" ? 31 : 28;
      const number = svgEl("text", {
        class:"odv2-primary-number",
        "data-number-for":tooth.id,
        x:(pos.x + pos.nx*labelOffset).toFixed(2),
        y:(pos.y + pos.ny*labelOffset).toFixed(2)
      });
      svg.append(number);
    });
  }

  function toothById(id) {
    return ALL_TEETH.find(t => t.id === id);
  }

  function selectedTeeth() {
    return ALL_TEETH.filter(t => state.selected.has(t.id));
  }

  function findField(identifier) {
    if (!identifier) return null;

    // 123FormBuilder may expose the identifier as either id or name.
    const byId = document.getElementById(identifier);
    if (byId) return byId;

    const candidates = document.getElementsByName(identifier);
    if (candidates && candidates.length) return candidates[0];

    return null;
  }

  function updateField(identifier, value) {
    const field = findField(identifier);
    if (!field) return false;

    if (field.value !== value) {
      field.value = value;
      field.dispatchEvent(new Event("input", { bubbles:true }));
      field.dispatchEvent(new Event("change", { bubbles:true }));
      field.dispatchEvent(new Event("blur", { bubbles:true }));
    }
    return true;
  }

  function readableValue() {
    const selected = selectedTeeth();
    if (!selected.length) return "No teeth selected";
    return `Universal: ${selected.map(t=>t.universal).join(", ")}\nFDI: ${selected.map(t=>t.fdi).join(", ")}`;
  }

  function jsonValue() {
    return JSON.stringify({
      version:"8.0",
      displayNumbering:state.system,
      dentition:"mixed",
      selectedTeeth:selectedTeeth().map(t => ({
        id:t.id,
        universal:t.universal,
        fdi:t.fdi,
        quadrant:t.quadrant,
        dentition:t.dentition || "permanent"
      }))
    });
  }

  function scheduleFieldRetry() {
    if (runtime.fieldRetryTimer || runtime.fieldRetryCount >= FIELD_RETRY_LIMIT) return;

    runtime.fieldRetryTimer = setTimeout(() => {
      runtime.fieldRetryTimer = null;
      runtime.fieldRetryCount += 1;
      syncFields();

      if (runtime.fieldRetryCount === FIELD_RETRY_LIMIT) {
        warn("Field discovery timed out.", {
          selectedField: config.selectedField,
          jsonField: config.jsonField
        });
      }
    }, FIELD_RETRY_MS);
  }

  function syncFields() {
    const selectedValue = readableValue();
    const jsonData = jsonValue();

    const selectedOk = updateField(config.selectedField, selectedValue);
    const jsonOk = updateField(config.jsonField, jsonData);

    runtime.lastSelectedValue = selectedValue;
    runtime.lastJsonValue = jsonData;

    if (selectedOk && jsonOk) {
      if (runtime.fieldRetryCount > 0) {
        log("Storage fields discovered after retry", runtime.fieldRetryCount);
      }
      runtime.fieldRetryCount = 0;
      if (runtime.fieldRetryTimer) {
        clearTimeout(runtime.fieldRetryTimer);
        runtime.fieldRetryTimer = null;
      }
      return true;
    }

    scheduleFieldRetry();
    return false;
  }

  function renderChips() {
    chips.innerHTML = "";
    selectedTeeth().forEach(tooth => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "odv2-chip";
      chip.dataset.removeTooth = tooth.id;
      chip.textContent = tooth[state.system];
      chip.setAttribute("aria-label", `Remove tooth ${tooth[state.system]}`);
      chips.append(chip);
    });
  }

  function render() {
    svg.querySelectorAll(".odv2-tooth").forEach(group => {
      const tooth = toothById(group.dataset.toothId);
      const selected = state.selected.has(tooth.id);
      group.classList.toggle("is-selected", selected);
      group.setAttribute("aria-pressed", String(selected));
      group.setAttribute("aria-label", `${tooth.quadrant}, tooth ${tooth[state.system]}, ${selected ? "selected" : "not selected"}`);

      const number = svg.querySelector(`[data-number-for="${tooth.id}"]`);
      if (number) {
        number.textContent = tooth[state.system];
        number.classList.toggle("is-selected", selected);
      }
    });

    svg.querySelectorAll(".odv2-primary-tooth").forEach(group => {
      const tooth = toothById(group.dataset.toothId);
      const selected = state.selected.has(tooth.id);
      group.classList.toggle("is-selected", selected);
      group.setAttribute("aria-pressed", String(selected));
      group.setAttribute("aria-label", `${tooth.quadrant}, primary tooth ${tooth[state.system]}, ${selected ? "selected" : "not selected"}`);

      const number = svg.querySelector(`[data-number-for="${tooth.id}"]`);
      if (number) {
        number.textContent = tooth[state.system];
        number.classList.toggle("is-selected", selected);
      }
    });

    svg.querySelectorAll(".odv2-quadrant-control").forEach(control => {
      const ids = QUADRANT_TEETH[control.dataset.quadrant] || [];
      const allSelected = ids.length === 8 && ids.every(id => state.selected.has(id));
      control.classList.toggle("is-selected", allSelected);
      control.setAttribute("aria-pressed", String(allSelected));
    });

    mount.querySelectorAll("[data-system]").forEach(btn => {
      const active = btn.dataset.system === state.system;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-checked", String(active));
    });

    fullMouthButton.textContent = state.selected.size === ALL_TEETH.length ? "Clear full mouth" : "Select full mouth";
    renderChips();
    syncFields();
  }

  function toggleTooth(id) {
    const tooth = toothById(id);
    if (!tooth) return;
    if (state.selected.has(id)) state.selected.delete(id);
    else state.selected.add(id);

    liveRegion.textContent = `Tooth ${tooth[state.system]} ${state.selected.has(id) ? "selected" : "removed"}.`;
    render();
  }

  function toggleQuadrant(key) {
    const ids = QUADRANT_TEETH[key];
    if (!ids) return;

    const allSelected = ids.every(id => state.selected.has(id));

    ids.forEach(id => {
      if (allSelected) state.selected.delete(id);
      else state.selected.add(id);
    });

    const readable = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, char => char.toUpperCase());

    liveRegion.textContent = allSelected
      ? `${readable} quadrant cleared.`
      : `${readable} quadrant selected.`;

    render();
  }

  function bindEvents() {
    svg.addEventListener("click", e => {
      const tooth = e.target.closest(".odv2-tooth, .odv2-primary-tooth");
      if (tooth) toggleTooth(tooth.dataset.toothId);
    });

    svg.addEventListener("keydown", e => {
      const tooth = e.target.closest(".odv2-tooth, .odv2-primary-tooth");
      if (!tooth) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTooth(tooth.dataset.toothId);
      }
    });

    settingsButton.addEventListener("click", () => {
      const opening = settingsPanel.hidden;
      settingsPanel.hidden = !opening;
      settingsButton.setAttribute("aria-expanded", String(opening));
    });

    mount.querySelectorAll("[data-system]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.system = btn.dataset.system;
        settingsPanel.hidden = true;
        settingsButton.setAttribute("aria-expanded", "false");
        render();
      });
    });

    fullMouthButton.addEventListener("click", () => {
      const allPermanentSelected = TEETH.every(t => state.selected.has(t.id));

      if (allPermanentSelected) {
        TEETH.forEach(t => state.selected.delete(t.id));
        liveRegion.textContent = "Permanent teeth cleared.";
      } else {
        TEETH.forEach(t => state.selected.add(t.id));
        liveRegion.textContent = "Permanent full mouth selected.";
      }

      render();
    });

    chips.addEventListener("click", e => {
      const chip = e.target.closest("[data-remove-tooth]");
      if (chip) toggleTooth(chip.dataset.removeTooth);
    });

    document.addEventListener("click", e => {
      const wrap = mount.querySelector(".odv2-settings-wrap");
      if (!wrap.contains(e.target)) {
        settingsPanel.hidden = true;
        settingsButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  function applyBuiltInConfig() {
    state.system = config.defaultSystem === "fdi" ? "fdi" : "universal";
  }

  function restoreFieldValuesIfNeeded() {
    if (runtime.lastSelectedValue !== null) {
      updateField(config.selectedField, runtime.lastSelectedValue);
    }
    if (runtime.lastJsonValue !== null) {
      updateField(config.jsonField, runtime.lastJsonValue);
    }
  }

  function installObserver() {
    if (runtime.observer || !document.body) return;

    runtime.observer = new MutationObserver(() => {
      const currentMount = document.getElementById("odontogram-mount");

      // Reinitialize if 123FormBuilder replaces the HTML block.
      if (currentMount && currentMount.dataset.odontogramReady !== "v8.0") {
        log("Mount replacement detected; reinitializing.");
        initialize();
      }

      // Reapply values if form fields are redrawn.
      restoreFieldValuesIfNeeded();
    });

    runtime.observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    log("DOM observer installed.");
  }

  function initialize() {
    mount = document.getElementById("odontogram-mount");
    if (!mount || mount.dataset.odontogramReady === "v8.0") return false;

    mount.dataset.odontogramReady = "v8.0";
    log(`Initializing build ${BUILD}`, {
      selectedField: config.selectedField,
      jsonField: config.jsonField
    });
    injectStyles();
    applyBuiltInConfig();
    buildShell();
    addDefs();
    addGuidesAndLabels();
    addTeeth();
    addPrimaryTeeth();
    bindEvents();
    render();
    installObserver();
    log("Initialization complete.");
    return true;
  }

  function waitForMount() {
    if (initialize()) return;

    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;

      if (initialize()) {
        clearInterval(timer);
        return;
      }

      if (attempts >= MOUNT_RETRY_LIMIT) {
        clearInterval(timer);
        warn("Mount element was not found before timeout. Expected: <div id=\"odontogram-mount\"></div>");
      }
    }, MOUNT_RETRY_MS);
  }

  window.ReferaOdontogramV4 = Object.freeze({
    version: BUILD,
    diagnostics() {
      return {
        version: BUILD,
        mountFound: !!document.getElementById("odontogram-mount"),
        selectedFieldFound: !!findField(config.selectedField),
        jsonFieldFound: !!findField(config.jsonField),
        selectedCount: state.selected.size,
        permanentSelectedCount: TEETH.filter(t => state.selected.has(t.id)).length,
        primarySelectedCount: PRIMARY_TEETH.filter(t => state.selected.has(t.id)).length,
        numberingSystem: state.system
      };
    },
    resync() {
      log("Manual resync requested.");
      return syncFields();
    },
    selectQuadrant(key) {
      const ids = QUADRANT_TEETH[key];
      if (!ids) return false;
      ids.forEach(id => state.selected.add(id));
      render();
      return true;
    },
    toggleQuadrant(key) {
      if (!QUADRANT_TEETH[key]) return false;
      toggleQuadrant(key);
      return true;
    }
  });

  window.ReferaOdontogramV8 = window.ReferaOdontogramV4;

  window.addEventListener("error", event => {
    warn("Runtime error:", event.message);
  });

  log(`Script loaded. Build ${BUILD}`);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForMount);
  } else {
    waitForMount();
  }
})();
