/**
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["nus-SS"] = {
        name: "nus-SS",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "South Sudanese Pound",
                abbr: "SSP",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "£"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Cäŋ kuɔth","Jiec la̱t","Rɛw lätni","Diɔ̱k lätni","Ŋuaan lätni","Dhieec lätni","Bäkɛl lätni"],
                    namesAbbr: ["Cäŋ","Jiec","Rɛw","Diɔ̱k","Ŋuaan","Dhieec","Bäkɛl"],
                    namesShort: ["Cäŋ","Jiec","Rɛw","Diɔ̱k","Ŋuaan","Dhieec","Bäkɛl"]
                },
                months: {
                    names: ["Tiop thar pɛt","Pɛt","Duɔ̱ɔ̱ŋ","Guak","Duät","Kornyoot","Pay yie̱tni","Tho̱o̱r","Tɛɛr","Laath","Kur","Tio̱p in di̱i̱t"],
                    namesAbbr: ["Tiop","Pɛt","Duɔ̱ɔ̱","Guak","Duä","Kor","Pay","Thoo","Tɛɛ","Laa","Kur","Tid"]
                },
                AM: ["RW","rw","RW"],
                PM: ["TŊ","tŋ","TŊ"],
                patterns: {
                    d: "d/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    F: "dddd d MMMM yyyy h:mm:ss tt",
                    g: "d/MM/yyyy h:mm tt",
                    G: "d/MM/yyyy h:mm:ss tt",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));