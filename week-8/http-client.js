/*
======================================
; Title: http-client.js 
; Author: Professor Krasso
; Date: 20 Feb 2023
; Modified By: Chris Gorham
; Description: This code is used for the http client in the WhatABook, Part 2 App assignment
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

"use-strict";

// creating and exporting the http client class
export class HttpClient {
    async get(url, params="") {
        // create a new URL with a different name that can be referenced
        let urlTest = new URL(url);

        urlTest.search = new URLSearchParams(params);

        const res = await fetch(urlTest.toString(), {method: "GET"});
        return res.json();
    }


}