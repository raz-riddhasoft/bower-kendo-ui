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
    kendo.cultures["bo-IN"] = {
        name: "bo-IN",
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
                name: "Indian Rupee",
                abbr: "INR",
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "₹"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["གཟའ་ཉི་མ་","གཟའ་ཟླ་བ་","གཟའ་མིག་དམར་","གཟའ་ལྷག་པ་","གཟའ་ཕུར་བུ་","གཟའ་པ་སངས་","གཟའ་སྤེན་པ་"],
                    namesAbbr: ["ཉི་མ་","ཟླ་བ་","མིག་དམར་","ལྷག་པ་","ཕུར་བུ་","པ་སངས་","སྤེན་པ་"],
                    namesShort: ["ཉི་མ་","ཟླ་བ་","མིག་དམར་","ལྷག་པ་","ཕུར་བུ་","པ་སངས་","སྤེན་པ་"]
                },
                months: {
                    names: ["ཟླ་བ་དང་པོ་","ཟླ་བ་གཉིས་པ་","ཟླ་བ་གསུམ་པ་","ཟླ་བ་བཞི་པ་","ཟླ་བ་ལྔ་པ་","ཟླ་བ་དྲུག་པ་","ཟླ་བ་བདུན་པ་","ཟླ་བ་བརྒྱད་པ་","ཟླ་བ་དགུ་པ་","ཟླ་བ་བཅུ་པ་","ཟླ་བ་བཅུ་གཅིག་པ་","ཟླ་བ་བཅུ་གཉིས་པ་"],
                    namesAbbr: ["ཟླ་༡","ཟླ་༢","ཟླ་༣","ཟླ་༤","ཟླ་༥","ཟླ་༦","ཟླ་༧","ཟླ་༨","ཟླ་༩","ཟླ་༡༠","ཟླ་༡༡","ཟླ་༡༢"]
                },
                AM: ["སྔ་དྲོ་","སྔ་དྲོ་","སྔ་དྲོ་"],
                PM: ["ཕྱི་དྲོ་","ཕྱི་དྲོ་","ཕྱི་དྲོ་"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy MMMMའི་ཚེས་d, dddd",
                    F: "yyyy MMMMའི་ཚེས་d, dddd h:mm:ss tt",
                    g: "yyyy-MM-dd h:mm tt",
                    G: "yyyy-MM-dd h:mm:ss tt",
                    m: "MMMMའི་ཚེས་d",
                    M: "MMMMའི་ཚེས་d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": "-",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
}));