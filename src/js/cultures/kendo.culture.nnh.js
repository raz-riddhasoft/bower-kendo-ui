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
    kendo.cultures["nnh"] = {
        name: "nnh",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ".",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "",
                abbr: "",
                pattern: ["-$ n","$ n"],
                decimals: 0,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "FCFA"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["lyɛʼɛ́ sẅíŋtè","mvfò lyɛ̌ʼ","mbɔ́ɔntè mvfò lyɛ̌ʼ","tsètsɛ̀ɛ lyɛ̌ʼ","mbɔ́ɔntè tsetsɛ̀ɛ lyɛ̌ʼ","mvfò màga lyɛ̌ʼ","màga lyɛ̌ʼ"],
                    namesAbbr: ["lyɛʼɛ́ sẅíŋtè","mvfò lyɛ̌ʼ","mbɔ́ɔntè mvfò lyɛ̌ʼ","tsètsɛ̀ɛ lyɛ̌ʼ","mbɔ́ɔntè tsetsɛ̀ɛ lyɛ̌ʼ","mvfò màga lyɛ̌ʼ","màga lyɛ̌ʼ"],
                    namesShort: ["lyɛʼɛ́ sẅíŋtè","mvfò lyɛ̌ʼ","mbɔ́ɔntè mvfò lyɛ̌ʼ","tsètsɛ̀ɛ lyɛ̌ʼ","mbɔ́ɔntè tsetsɛ̀ɛ lyɛ̌ʼ","mvfò màga lyɛ̌ʼ","màga lyɛ̌ʼ"]
                },
                months: {
                    names: ["saŋ tsetsɛ̀ɛ lùm","saŋ kàg ngwóŋ","saŋ lepyè shúm","saŋ cÿó","saŋ tsɛ̀ɛ cÿó","saŋ njÿoláʼ","saŋ tyɛ̀b tyɛ̀b mbʉ̀ŋ","saŋ mbʉ̀ŋ","saŋ ngwɔ̀ʼ mbÿɛ","saŋ tàŋa tsetsáʼ","saŋ mejwoŋó","saŋ lùm"],
                    namesAbbr: ["saŋ tsetsɛ̀ɛ lùm","saŋ kàg ngwóŋ","saŋ lepyè shúm","saŋ cÿó","saŋ tsɛ̀ɛ cÿó","saŋ njÿoláʼ","saŋ tyɛ̀b tyɛ̀b mbʉ̀ŋ","saŋ mbʉ̀ŋ","saŋ ngwɔ̀ʼ mbÿɛ","saŋ tàŋa tsetsáʼ","saŋ mejwoŋó","saŋ lùm"]
                },
                AM: ["mbaʼámbaʼ","mbaʼámbaʼ","MBAʼÁMBAʼ"],
                PM: ["ncwònzém","ncwònzém","NCWÒNZÉM"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd , 'lyɛ'̌ʼ d 'na' MMMM, yyyy",
                    F: "dddd , 'lyɛ'̌ʼ d 'na' MMMM, yyyy HH:mm:ss",
                    g: "dd/MM/yyyy HH:mm",
                    G: "dd/MM/yyyy HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
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