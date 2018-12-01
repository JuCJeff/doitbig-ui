import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<NotFoundPage />);
    expect(
      renderedComponent.contains(
        <div>
          <meta charSet="utf-8" />
          <title>404</title>
          <style
            className="cp-pen-styles"
            /* eslint-disable react/no-danger */
            dangerouslySetInnerHTML={{
              __html:
                '\n        .me404 {\n            width: 1000px;\n            height: 480px;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            margin-left: -400px;\n            margin-top: -240px;\n        }\n\n        .st0 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: #E8EBED;\n        }\n\n        .st1 {\n            fill: #FFFFFF;\n            stroke: #89949B;\n            stroke-width: 3;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        .st2 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: #DBDFE1;\n        }\n\n        .st3 {\n            fill: #FFFFFF;\n        }\n\n        .st4 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: #E8EBED;\n            stroke: #89949B;\n            stroke-width: 3;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        .st5 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: #FFFFFF;\n            stroke: #89949B;\n            stroke-width: 3;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        .st6 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: none;\n            stroke: #89949B;\n            stroke-width: 3;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        .st7 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: none;\n            stroke: #89949B;\n            stroke-width: 4;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        .st8 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: #FFFFFF;\n            stroke: #89949B;\n            stroke-width: 2;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        .st9 {\n            fill: #89949B;\n        }\n\n        .st10 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: #89949B;\n        }\n\n        .st11 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: none;\n            stroke: #89949B;\n            stroke-width: 2;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        .st12 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: #FFFFFF;\n        }\n\n        .st13 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: #FFFFFF;\n            stroke: #8894A0;\n            stroke-width: 3;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        .st14 {\n            fill-rule: evenodd;\n            clip-rule: evenodd;\n            fill: none;\n            stroke: #89949B;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        .st15 {\n            fill: none;\n            stroke: #89949B;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n        }\n\n        #cloud {\n            -webkit-animation: cloud 9s infinite ease-in-out;\n            -moz-animation: cloud 9s infinite ease-in-out;\n            -o-animation: cloud 9s infinite ease-in-out;\n            animation: cloud 9s infinite ease-in-out;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes cloud {\n            0% {\n                opacity: 0.3;\n                left: 160px;\n                -webkit-transform: skewX(20deg);\n            }\n            65% {\n                opacity: 1;\n                left: 114px;\n                -webkit-transform: skewX(0deg);\n            }\n            100% {\n                opacity: 0.3;\n                left: 160px;\n                -webkit-transform: skewX(20deg);\n            }\n        }\n\n        @-moz-keyframes cloud {\n            0% {\n                opacity: 0.3;\n                left: 160px;\n                -moz-transform: skewX(20deg);\n            }\n            65% {\n                opacity: 1;\n                left: 114px;\n                -moz-transform: skewX(0deg);\n            }\n            100% {\n                opacity: 0.3;\n                left: 160px;\n                -moz-transform: skewX(20deg);\n            }\n        }\n\n        @-o-keyframes cloud {\n            0% {\n                opacity: 0.3;\n                left: 160px;\n                -o-transform: skewX(20deg);\n            }\n            65% {\n                opacity: 1;\n                left: 114px;\n                -o-transform: skewX(0deg);\n            }\n            100% {\n                opacity: 0.3;\n                left: 160px;\n                -o-transform: skewX(20deg);\n            }\n        }\n\n        @keyframes cloud {\n            0% {\n                opacity: 0.3;\n                left: 160px;\n                -webkit-transform: skewX(20deg);\n                -moz-transform: skewX(20deg);\n                -ms-transform: skewX(20deg);\n                transform: skewX(20deg);\n            }\n            65% {\n                opacity: 1;\n                left: 114px;\n                -webkit-transform: skewX(0deg);\n                -moz-transform: skewX(0deg);\n                -ms-transform: skewX(0deg);\n                transform: skewX(0deg);\n            }\n            100% {\n                opacity: 0.3;\n                left: 160px;\n                -webkit-transform: skewX(20deg);\n                -moz-transform: skewX(20deg);\n                -ms-transform: skewX(20deg);\n                transform: skewX(20deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        #moon {\n            transform-origin: 640px 81px;\n            -webkit-animation: moon-float 6s infinite ease-in-out;\n            -moz-animation: moon-float 6s infinite ease-in-out;\n            -o-animation: moon-float 6s infinite ease-in-out;\n            animation: moon-float 6s infinite ease-in-out;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes moon-float {\n            0% {\n                -webkit-transform: translate(0, 20px) scale(1.1);\n            }\n            65% {\n                -webkit-transform: translate(0, 0px) scale(1.0);\n            }\n            100% {\n                -webkit-transform: translate(0, 20px) scale(1.1);\n            }\n        }\n\n        @-moz-keyframes moon-float {\n            0% {\n                -moz-transform: translate(0, 20px) scale(1.1);\n            }\n            65% {\n                -moz-transform: translate(0, 0px) scale(1.0);\n            }\n            100% {\n                -moz-transform: translate(0, 20px) scale(1.1);\n            }\n        }\n\n        @-o-keyframes moon-float {\n            0% {\n                -o-transform: translate(0, 20px) scale(1.1);\n            }\n            65% {\n                -o-transform: translate(0, 0px) scale(1.0);\n            }\n            100% {\n                -o-transform: translate(0, 20px) scale(1.1);\n            }\n        }\n\n        @keyframes moon-float {\n            0% {\n                -webkit-transform: translate(0, 20px) scale(1.1);\n                -moz-transform: translate(0, 20px) scale(1.1);\n                -ms-transform: translate(0, 20px) scale(1.1);\n                transform: translate(0, 20px) scale(1.1);\n            }\n            65% {\n                -webkit-transform: translate(0, 0px) scale(1.0);\n                -moz-transform: translate(0, 0px) scale(1.0);\n                -ms-transform: translate(0, 0px) scale(1.0);\n                transform: translate(0, 0px) scale(1.0);\n            }\n            100% {\n                -webkit-transform: translate(0, 20px) scale(1.1);\n                -moz-transform: translate(0, 20px) scale(1.1);\n                -ms-transform: translate(0, 20px) scale(1.1);\n                transform: translate(0, 20px) scale(1.1);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        #monkey-eye-l {\n            transform-origin: 191px 257px;\n            -webkit-animation: blink-l 12s infinite ease-in-out;\n            -moz-animation: blink-l 12s infinite ease-in-out;\n            -o-animation: blink-l 12s infinite ease-in-out;\n            animation: blink-l 12s infinite ease-in-out;\n        }\n\n        #monkey-eye-r {\n            transform-origin: 205px 256px;\n            -webkit-animation: blink-r 12s infinite ease-in-out;\n            -moz-animation: blink-r 12s infinite ease-in-out;\n            -o-animation: blink-r 12s infinite ease-in-out;\n            animation: blink-r 12s infinite ease-in-out;\n        }\n\n        #monkey-arm {\n            transform-origin: 155px 298px;\n            -webkit-animation: monkey-arm 4s infinite ease-in-out;\n            -moz-animation: monkey-arm 4s infinite ease-in-out;\n            -o-animation: monkey-arm 4s infinite ease-in-out;\n            animation: monkey-arm 4s infinite ease-in-out;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes monkey-arm {\n            0% {\n                -webkit-transform: rotateZ(-10deg);\n            }\n            50% {\n                -webkit-transform: rotateZ(20deg);\n            }\n            100% {\n                -webkit-transform: rotateZ(-10deg);\n            }\n        }\n\n        @-moz-keyframes monkey-arm {\n            0% {\n                -moz-transform: rotateZ(-10deg);\n            }\n            50% {\n                -moz-transform: rotateZ(20deg);\n            }\n            100% {\n                -moz-transform: rotateZ(-10deg);\n            }\n        }\n\n        @-o-keyframes monkey-arm {\n            0% {\n                -o-transform: rotateZ(-10deg);\n            }\n            50% {\n                -o-transform: rotateZ(20deg);\n            }\n            100% {\n                -o-transform: rotateZ(-10deg);\n            }\n        }\n\n        @keyframes monkey-arm {\n            0% {\n                -webkit-transform: rotateZ(-10deg);\n                -moz-transform: rotateZ(-10deg);\n                -ms-transform: rotateZ(-10deg);\n                transform: rotateZ(-10deg);\n            }\n            50% {\n                -webkit-transform: rotateZ(20deg);\n                -moz-transform: rotateZ(20deg);\n                -ms-transform: rotateZ(20deg);\n                transform: rotateZ(20deg);\n            }\n            100% {\n                -webkit-transform: rotateZ(-10deg);\n                -moz-transform: rotateZ(-10deg);\n                -ms-transform: rotateZ(-10deg);\n                transform: rotateZ(-10deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes blink-l {\n            0% {\n                -webkit-transform: rotateX(0deg);\n            }\n            2% {\n                -webkit-transform: rotateX(80deg);\n            }\n            4%, 20% {\n                -webkit-transform: rotateX(0deg);\n            }\n            22% {\n                -webkit-transform: rotateX(80deg);\n            }\n            24%, 30% {\n                -webkit-transform: rotateX(0deg);\n            }\n            32% {\n                -webkit-transform: rotateX(80deg);\n            }\n            34%, 70% {\n                -webkit-transform: rotateX(0deg);\n            }\n            72% {\n                -webkit-transform: rotateX(80deg);\n            }\n            74%, 100% {\n                -webkit-transform: rotateX(0deg);\n            }\n        }\n\n        @-moz-keyframes blink-l {\n            0% {\n                -moz-transform: rotateX(0deg);\n            }\n            2% {\n                -moz-transform: rotateX(80deg);\n            }\n            4%, 20% {\n                -moz-transform: rotateX(0deg);\n            }\n            22% {\n                -moz-transform: rotateX(80deg);\n            }\n            24%, 30% {\n                -moz-transform: rotateX(0deg);\n            }\n            32% {\n                -moz-transform: rotateX(80deg);\n            }\n            34%, 70% {\n                -moz-transform: rotateX(0deg);\n            }\n            72% {\n                -moz-transform: rotateX(80deg);\n            }\n            74%, 100% {\n                -moz-transform: rotateX(0deg);\n            }\n        }\n\n        @-o-keyframes blink-l {\n            0% {\n                -o-transform: rotateX(0deg);\n            }\n            2% {\n                -o-transform: rotateX(80deg);\n            }\n            4%, 20% {\n                -o-transform: rotateX(0deg);\n            }\n            22% {\n                -o-transform: rotateX(80deg);\n            }\n            24%, 30% {\n                -o-transform: rotateX(0deg);\n            }\n            32% {\n                -o-transform: rotateX(80deg);\n            }\n            34%, 70% {\n                -o-transform: rotateX(0deg);\n            }\n            72% {\n                -o-transform: rotateX(80deg);\n            }\n            74%, 100% {\n                -o-transform: rotateX(0deg);\n            }\n        }\n\n        @keyframes blink-l {\n            0% {\n                -webkit-transform: rotateX(0deg);\n                -moz-transform: rotateX(0deg);\n                -ms-transform: rotateX(0deg);\n                transform: rotateX(0deg);\n            }\n            2% {\n                -webkit-transform: rotateX(80deg);\n                -moz-transform: rotateX(80deg);\n                -ms-transform: rotateX(80deg);\n                transform: rotateX(80deg);\n            }\n            4%, 20% {\n                -webkit-transform: rotateX(0deg);\n                -moz-transform: rotateX(0deg);\n                -ms-transform: rotateX(0deg);\n                transform: rotateX(0deg);\n            }\n            22% {\n                -webkit-transform: rotateX(80deg);\n                -moz-transform: rotateX(80deg);\n                -ms-transform: rotateX(80deg);\n                transform: rotateX(80deg);\n            }\n            24%, 30% {\n                -webkit-transform: rotateX(0deg);\n                -moz-transform: rotateX(0deg);\n                -ms-transform: rotateX(0deg);\n                transform: rotateX(0deg);\n            }\n            32% {\n                -webkit-transform: rotateX(80deg);\n                -moz-transform: rotateX(80deg);\n                -ms-transform: rotateX(80deg);\n                transform: rotateX(80deg);\n            }\n            34%, 70% {\n                -webkit-transform: rotateX(0deg);\n                -moz-transform: rotateX(0deg);\n                -ms-transform: rotateX(0deg);\n                transform: rotateX(0deg);\n            }\n            72% {\n                -webkit-transform: rotateX(80deg);\n                -moz-transform: rotateX(80deg);\n                -ms-transform: rotateX(80deg);\n                transform: rotateX(80deg);\n            }\n            74%, 100% {\n                -webkit-transform: rotateX(0deg);\n                -moz-transform: rotateX(0deg);\n                -ms-transform: rotateX(0deg);\n                transform: rotateX(0deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes blink-r {\n            0% {\n                -webkit-transform: rotateX(0deg);\n            }\n            2% {\n                -webkit-transform: rotateX(80deg);\n            }\n            4%, 30% {\n                -webkit-transform: rotateX(0deg);\n            }\n            32% {\n                -webkit-transform: rotateX(80deg);\n            }\n            34%, 50% {\n                -webkit-transform: rotateX(0deg);\n            }\n            52% {\n                -webkit-transform: rotateX(80deg);\n            }\n            54%, 100% {\n                -webkit-transform: rotateX(0deg);\n            }\n        }\n\n        @-moz-keyframes blink-r {\n            0% {\n                -moz-transform: rotateX(0deg);\n            }\n            2% {\n                -moz-transform: rotateX(80deg);\n            }\n            4%, 30% {\n                -moz-transform: rotateX(0deg);\n            }\n            32% {\n                -moz-transform: rotateX(80deg);\n            }\n            34%, 50% {\n                -moz-transform: rotateX(0deg);\n            }\n            52% {\n                -moz-transform: rotateX(80deg);\n            }\n            54%, 100% {\n                -moz-transform: rotateX(0deg);\n            }\n        }\n\n        @-o-keyframes blink-r {\n            0% {\n                -o-transform: rotateX(0deg);\n            }\n            2% {\n                -o-transform: rotateX(80deg);\n            }\n            4%, 30% {\n                -o-transform: rotateX(0deg);\n            }\n            32% {\n                -o-transform: rotateX(80deg);\n            }\n            34%, 50% {\n                -o-transform: rotateX(0deg);\n            }\n            52% {\n                -o-transform: rotateX(80deg);\n            }\n            54%, 100% {\n                -o-transform: rotateX(0deg);\n            }\n        }\n\n        @keyframes blink-r {\n            0% {\n                -webkit-transform: rotateX(0deg);\n                -moz-transform: rotateX(0deg);\n                -ms-transform: rotateX(0deg);\n                transform: rotateX(0deg);\n            }\n            2% {\n                -webkit-transform: rotateX(80deg);\n                -moz-transform: rotateX(80deg);\n                -ms-transform: rotateX(80deg);\n                transform: rotateX(80deg);\n            }\n            4%, 30% {\n                -webkit-transform: rotateX(0deg);\n                -moz-transform: rotateX(0deg);\n                -ms-transform: rotateX(0deg);\n                transform: rotateX(0deg);\n            }\n            32% {\n                -webkit-transform: rotateX(80deg);\n                -moz-transform: rotateX(80deg);\n                -ms-transform: rotateX(80deg);\n                transform: rotateX(80deg);\n            }\n            34%, 50% {\n                -webkit-transform: rotateX(0deg);\n                -moz-transform: rotateX(0deg);\n                -ms-transform: rotateX(0deg);\n                transform: rotateX(0deg);\n            }\n            52% {\n                -webkit-transform: rotateX(80deg);\n                -moz-transform: rotateX(80deg);\n                -ms-transform: rotateX(80deg);\n                transform: rotateX(80deg);\n            }\n            54%, 100% {\n                -webkit-transform: rotateX(0deg);\n                -moz-transform: rotateX(0deg);\n                -ms-transform: rotateX(0deg);\n                transform: rotateX(0deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        #star1 {\n            transform-origin: 643px 338px;\n            -webkit-animation: star1 12s infinite linear, star1-fade 12s infinite ease-in-out;\n            -moz-animation: star1 12s infinite linear, star1-fade 12s infinite ease-in-out;\n            -o-animation: star1 12s infinite linear, star1-fade 12s infinite ease-in-out;\n            animation: star1 12s infinite linear, star1-fade 12s infinite ease-in-out;\n        }\n\n        #star2 {\n            transform-origin: 489px 82px;\n            -webkit-animation: star2 12s infinite linear, star2-fade 12s infinite ease-in-out;\n            -moz-animation: star2 12s infinite linear, star2-fade 12s infinite ease-in-out;\n            -o-animation: star2 12s infinite linear, star2-fade 12s infinite ease-in-out;\n            animation: star2 12s infinite linear, star2-fade 12s infinite ease-in-out;\n        }\n\n        #star3 {\n            transform-origin: 316px 344px;\n            -webkit-animation: star3 12s infinite linear, star3-fade 12s infinite ease-in-out;\n            -moz-animation: star3 12s infinite linear, star3-fade 12s infinite ease-in-out;\n            -o-animation: star3 12s infinite linear, star3-fade 12s infinite ease-in-out;\n            animation: star3 12s infinite linear, star3-fade 12s infinite ease-in-out;\n        }\n\n        #star4 {\n            transform-origin: 126px 182px;\n            -webkit-animation: star4 12s infinite linear, star4-fade 12s infinite ease-in-out;\n            -moz-animation: star4 12s infinite linear, star4-fade 12s infinite ease-in-out;\n            -o-animation: star4 12s infinite linear, star4-fade 12s infinite ease-in-out;\n            animation: star4 12s infinite linear, star4-fade 12s infinite ease-in-out;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes star1 {\n            0% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            15% {\n                -webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            30%, 100% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @-moz-keyframes star1 {\n            0% {\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            15% {\n                -moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            30%, 100% {\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @-o-keyframes star1 {\n            0% {\n                -o-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            15% {\n                -o-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            30%, 100% {\n                -o-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @keyframes star1 {\n            0% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                -ms-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            15% {\n                -webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                -moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                -ms-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            30%, 100% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                -ms-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes star2 {\n            0%, 15% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            30% {\n                -webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            45%, 100% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @-moz-keyframes star2 {\n            0%, 15% {\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            30% {\n                -moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            45%, 100% {\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @-o-keyframes star2 {\n            0%, 15% {\n                -o-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            30% {\n                -o-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            45%, 100% {\n                -o-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @keyframes star2 {\n            0%, 15% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                -ms-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            30% {\n                -webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                -moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                -ms-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            45%, 100% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                -ms-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes star3 {\n            0%, 30% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            45% {\n                -webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            60%, 100% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @-moz-keyframes star3 {\n            0%, 30% {\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            45% {\n                -moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            60%, 100% {\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @-o-keyframes star3 {\n            0%, 30% {\n                -o-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            45% {\n                -o-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            60%, 100% {\n                -o-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @keyframes star3 {\n            0%, 30% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                -ms-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            45% {\n                -webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                -moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                -ms-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            60%, 100% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                -ms-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes star4 {\n            0%, 45% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            60% {\n                -webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            75%, 100% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @-moz-keyframes star4 {\n            0%, 45% {\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            60% {\n                -moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            75%, 100% {\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @-o-keyframes star4 {\n            0%, 45% {\n                -o-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            60% {\n                -o-transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            75%, 100% {\n                -o-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        @keyframes star4 {\n            0%, 45% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                -ms-transform: scale(.5) skewX(15deg) rotateZ(0deg);\n                transform: scale(.5) skewX(15deg) rotateZ(0deg);\n            }\n            60% {\n                -webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                -moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                -ms-transform: scale(1) skewX(0deg) rotateZ(360deg);\n                transform: scale(1) skewX(0deg) rotateZ(360deg);\n            }\n            75%, 100% {\n                -webkit-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                -moz-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                -ms-transform: scale(.5) skewX(15deg) rotateZ(720deg);\n                transform: scale(.5) skewX(15deg) rotateZ(720deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes star1-fade {\n            0% {\n                opacity: 0;\n            }\n            15% {\n                opacity: 1;\n            }\n            30%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @-moz-keyframes star1-fade {\n            0% {\n                opacity: 0;\n            }\n            15% {\n                opacity: 1;\n            }\n            30%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @-o-keyframes star1-fade {\n            0% {\n                opacity: 0;\n            }\n            15% {\n                opacity: 1;\n            }\n            30%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @keyframes star1-fade {\n            0% {\n                opacity: 0;\n            }\n            15% {\n                opacity: 1;\n            }\n            30%, 100% {\n                opacity: 0;\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes star2-fade {\n            0%, 15% {\n                opacity: 0;\n            }\n            30% {\n                opacity: 1;\n            }\n            45%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @-moz-keyframes star2-fade {\n            0%, 15% {\n                opacity: 0;\n            }\n            30% {\n                opacity: 1;\n            }\n            45%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @-o-keyframes star2-fade {\n            0%, 15% {\n                opacity: 0;\n            }\n            30% {\n                opacity: 1;\n            }\n            45%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @keyframes star2-fade {\n            0%, 15% {\n                opacity: 0;\n            }\n            30% {\n                opacity: 1;\n            }\n            45%, 100% {\n                opacity: 0;\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes star3-fade {\n            0%, 30% {\n                opacity: 0;\n            }\n            45% {\n                opacity: 1;\n            }\n            60%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @-moz-keyframes star3-fade {\n            0%, 30% {\n                opacity: 0;\n            }\n            45% {\n                opacity: 1;\n            }\n            60%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @-o-keyframes star3-fade {\n            0%, 30% {\n                opacity: 0;\n            }\n            45% {\n                opacity: 1;\n            }\n            60%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @keyframes star3-fade {\n            0%, 30% {\n                opacity: 0;\n            }\n            45% {\n                opacity: 1;\n            }\n            60%, 100% {\n                opacity: 0;\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes star4-fade {\n            0%, 45% {\n                opacity: 0;\n            }\n            60% {\n                opacity: 1;\n            }\n            75%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @-moz-keyframes star4-fade {\n            0%, 45% {\n                opacity: 0;\n            }\n            60% {\n                opacity: 1;\n            }\n            75%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @-o-keyframes star4-fade {\n            0%, 45% {\n                opacity: 0;\n            }\n            60% {\n                opacity: 1;\n            }\n            75%, 100% {\n                opacity: 0;\n            }\n        }\n\n        @keyframes star4-fade {\n            0%, 45% {\n                opacity: 0;\n            }\n            60% {\n                opacity: 1;\n            }\n            75%, 100% {\n                opacity: 0;\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        #sword-path {\n            transform-origin: 458px 206px;\n            -webkit-animation: tetris-float 3s infinite ease-in-out;\n            -moz-animation: tetris-float 3s infinite ease-in-out;\n            -o-animation: tetris-float 3s infinite ease-in-out;\n            animation: tetris-float 3s infinite ease-in-out;\n        }\n\n        #sword {\n            transform-origin: 458px 206px;\n            -webkit-animation: sword 4s infinite ease-out;\n            -moz-animation: sword 4s infinite ease-out;\n            -o-animation: sword 4s infinite ease-out;\n            animation: sword 4s infinite ease-out;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes sword {\n            0%, 15% {\n                -webkit-transform: rotate(-40deg);\n            }\n            87% {\n                -webkit-transform: rotate(50deg);\n            }\n            100% {\n                -webkit-transform: rotate(-40deg);\n            }\n        }\n\n        @-moz-keyframes sword {\n            0%, 15% {\n                -moz-transform: rotate(-40deg);\n            }\n            87% {\n                -moz-transform: rotate(50deg);\n            }\n            100% {\n                -moz-transform: rotate(-40deg);\n            }\n        }\n\n        @-o-keyframes sword {\n            0%, 15% {\n                -o-transform: rotate(-40deg);\n            }\n            87% {\n                -o-transform: rotate(50deg);\n            }\n            100% {\n                -o-transform: rotate(-40deg);\n            }\n        }\n\n        @keyframes sword {\n            0%, 15% {\n                -webkit-transform: rotate(-40deg);\n                -moz-transform: rotate(-40deg);\n                -ms-transform: rotate(-40deg);\n                transform: rotate(-40deg);\n            }\n            87% {\n                -webkit-transform: rotate(50deg);\n                -moz-transform: rotate(50deg);\n                -ms-transform: rotate(50deg);\n                transform: rotate(50deg);\n            }\n            100% {\n                -webkit-transform: rotate(-40deg);\n                -moz-transform: rotate(-40deg);\n                -ms-transform: rotate(-40deg);\n                transform: rotate(-40deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        #tetris-path {\n            transform-origin: 538px 374px;\n            -webkit-animation: tetris-float 5s infinite ease-in-out;\n            -moz-animation: tetris-float 5s infinite ease-in-out;\n            -o-animation: tetris-float 5s infinite ease-in-out;\n            animation: tetris-float 5s infinite ease-in-out;\n        }\n\n        #tetris {\n            transform-origin: 538px 374px;\n            -webkit-animation: rotate 10s steps(1) infinite alternate;\n            -moz-animation: rotate 10s steps(1) infinite alternate;\n            -o-animation: rotate 10s steps(1) infinite alternate;\n            animation: rotate 10s steps(1) infinite alternate;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes rotate {\n            0% {\n                -webkit-transform: rotateZ(0deg);\n            }\n            25% {\n                -webkit-transform: rotateZ(90deg);\n            }\n            50% {\n                -webkit-transform: rotateZ(180deg);\n            }\n            75% {\n                -webkit-transform: rotateZ(270deg);\n            }\n            100% {\n                -webkit-transform: rotateZ(360deg);\n            }\n        }\n\n        @-moz-keyframes rotate {\n            0% {\n                -moz-transform: rotateZ(0deg);\n            }\n            25% {\n                -moz-transform: rotateZ(90deg);\n            }\n            50% {\n                -moz-transform: rotateZ(180deg);\n            }\n            75% {\n                -moz-transform: rotateZ(270deg);\n            }\n            100% {\n                -moz-transform: rotateZ(360deg);\n            }\n        }\n\n        @-o-keyframes rotate {\n            0% {\n                -o-transform: rotateZ(0deg);\n            }\n            25% {\n                -o-transform: rotateZ(90deg);\n            }\n            50% {\n                -o-transform: rotateZ(180deg);\n            }\n            75% {\n                -o-transform: rotateZ(270deg);\n            }\n            100% {\n                -o-transform: rotateZ(360deg);\n            }\n        }\n\n        @keyframes rotate {\n            0% {\n                -webkit-transform: rotateZ(0deg);\n                -moz-transform: rotateZ(0deg);\n                -ms-transform: rotateZ(0deg);\n                transform: rotateZ(0deg);\n            }\n            25% {\n                -webkit-transform: rotateZ(90deg);\n                -moz-transform: rotateZ(90deg);\n                -ms-transform: rotateZ(90deg);\n                transform: rotateZ(90deg);\n            }\n            50% {\n                -webkit-transform: rotateZ(180deg);\n                -moz-transform: rotateZ(180deg);\n                -ms-transform: rotateZ(180deg);\n                transform: rotateZ(180deg);\n            }\n            75% {\n                -webkit-transform: rotateZ(270deg);\n                -moz-transform: rotateZ(270deg);\n                -ms-transform: rotateZ(270deg);\n                transform: rotateZ(270deg);\n            }\n            100% {\n                -webkit-transform: rotateZ(360deg);\n                -moz-transform: rotateZ(360deg);\n                -ms-transform: rotateZ(360deg);\n                transform: rotateZ(360deg);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes tetris-float {\n            0% {\n                -webkit-transform: translate(0px, 0px) scale(0.90)\n            }\n            65% {\n                -webkit-transform: translate(0px, 30px) scale(1.0);\n            }\n            100% {\n                -webkit-transform: translate(0px, 0px) scale(0.90);\n            }\n        }\n\n        @-moz-keyframes tetris-float {\n            0% {\n                -moz-transform: translate(0px, 0px) scale(0.90)\n            }\n            65% {\n                -moz-transform: translate(0px, 30px) scale(1.0);\n            }\n            100% {\n                -moz-transform: translate(0px, 0px) scale(0.90);\n            }\n        }\n\n        @-o-keyframes tetris-float {\n            0% {\n                -o-transform: translate(0px, 0px) scale(0.90)\n            }\n            65% {\n                -o-transform: translate(0px, 30px) scale(1.0);\n            }\n            100% {\n                -o-transform: translate(0px, 0px) scale(0.90);\n            }\n        }\n\n        @keyframes tetris-float {\n            0% {\n                -webkit-transform: translate(0px, 0px) scale(0.90);\n                -moz-transform: translate(0px, 0px) scale(0.90);\n                -ms-transform: translate(0px, 0px) scale(0.90);\n                transform: translate(0px, 0px) scale(0.90);\n            }\n            65% {\n                -webkit-transform: translate(0px, 30px) scale(1.0);\n                -moz-transform: translate(0px, 30px) scale(1.0);\n                -ms-transform: translate(0px, 30px) scale(1.0);\n                transform: translate(0px, 30px) scale(1.0);\n            }\n            100% {\n                -webkit-transform: translate(0px, 0px) scale(0.90);\n                -moz-transform: translate(0px, 0px) scale(0.90);\n                -ms-transform: translate(0px, 0px) scale(0.90);\n                transform: translate(0px, 0px) scale(0.90);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n\n        #triforce {\n            transform-origin: 175px 91px;\n            -webkit-animation: triforce-float 3s infinite ease-in-out;\n            -moz-animation: triforce-float 3s infinite ease-in-out;\n            -o-animation: triforce-float 3s infinite ease-in-out;\n            animation: triforce-float 3s infinite ease-in-out;\n        }\n\n        lesshat-selector {\n            -lh-property: 0;\n        }\n\n        @-webkit-keyframes triforce-float {\n            0% {\n                -webkit-transform: translate(0px, 0px) scale(0.90)\n            }\n            65% {\n                -webkit-transform: translate(0px, 30px) scale(1.0);\n            }\n            100% {\n                -webkit-transform: translate(0px, 0px) scale(0.90);\n            }\n        }\n\n        @-moz-keyframes triforce-float {\n            0% {\n                -moz-transform: translate(0px, 0px) scale(0.90)\n            }\n            65% {\n                -moz-transform: translate(0px, 30px) scale(1.0);\n            }\n            100% {\n                -moz-transform: translate(0px, 0px) scale(0.90);\n            }\n        }\n\n        @-o-keyframes triforce-float {\n            0% {\n                -o-transform: translate(0px, 0px) scale(0.90)\n            }\n            65% {\n                -o-transform: translate(0px, 30px) scale(1.0);\n            }\n            100% {\n                -o-transform: translate(0px, 0px) scale(0.90);\n            }\n        }\n\n        @keyframes triforce-float {\n            0% {\n                -webkit-transform: translate(0px, 0px) scale(0.90);\n                -moz-transform: translate(0px, 0px) scale(0.90);\n                -ms-transform: translate(0px, 0px) scale(0.90);\n                transform: translate(0px, 0px) scale(0.90);\n            }\n            65% {\n                -webkit-transform: translate(0px, 30px) scale(1.0);\n                -moz-transform: translate(0px, 30px) scale(1.0);\n                -ms-transform: translate(0px, 30px) scale(1.0);\n                transform: translate(0px, 30px) scale(1.0);\n            }\n            100% {\n                -webkit-transform: translate(0px, 0px) scale(0.90);\n                -moz-transform: translate(0px, 0px) scale(0.90);\n                -ms-transform: translate(0px, 0px) scale(0.90);\n                transform: translate(0px, 0px) scale(0.90);\n            }\n        }\n\n        [not-existing] {\n            zoom: 1;\n        }\n    ',
            }}
          />
          <svg className="me404" viewBox="0 0 1000 480">
            <path
              id="cloud"
              className="st0"
              d="M658.4,345.2c-10.9,0-19.7-8.8-19.7-19.7c0-10.9,8.8-19.7,19.7-19.7h50.1c9.9-1.5,17.5-10,17.5-20.3
    c0-11.4-9.2-20.6-20.6-20.6v-0.2H633c-11.4,0-20.6-6.7-20.6-18.1c0-11.4,9.2-19.3,20.6-19.3h70.4l2-0.2c7.3-3.1,12.5-11,12.5-19.5
    c0-8.5-4.2-16.7-11.4-19.2l-2.5-0.3h-11.3c-11.9,0-21.6-8.9-21.6-19.9c0-11,9.7-19.9,21.6-19.9h15.8l1.4-0.3
    c8.6-2.5,14.8-10.1,14.8-19.5c0-11.4-9.2-20.6-20.6-20.6h-1.2h-69.2H382.5c-19.8-0.9-19.9-15.9-19.8-17.8c0-0.1,0-0.1,0-0.2
    c0-9.9-8.1-18-18-18h-93.5c-9.9,0-18,8.1-18,18c0,9.4,7.2,17.1,16.3,17.9h9.3c0.2,0,0,0,0.6,0l0.5,0l0.4,0l0.2,0
    c10.1,0.9,18,9.3,18,19.6c0,10.9-8.8,19.7-19.7,19.7h-70.7c-11.3,0-20.5,9.2-20.5,20.6c0,11.3,9.1,20.5,20.4,20.6h48.8
    c10.3,0,18.7,8.4,18.7,18.7c0,10.3-8.4,18.7-18.7,18.7h-23.2c-11.3,0.1-20.4,9.2-20.4,20.6c0,11.3,9.2,20.5,20.5,20.6h6.3
    c10.7,0,19.3,8.7,19.3,19.3c0,10.7-7.8,19.3-18.4,19.3l-1.5,0l-2.8,0.4c-7.3,3.1-11.8,11-11.5,18.9c0.3,8.5,4.2,16.5,11.7,19.6
    c1.1,0.7,3.4,0.9,4.4,0.9h4.5H296h19.7c3.9,0.5,8.2,4.2,7.4,10.4c0,0.4,0,0.8,0.1,1.1c0,0.5-0.1,1-0.1,1.5c0,9.7,7.9,17.5,17.5,17.5
    h60.2c9.7,0,17.5-7.9,17.5-17.5c0-0.4,0-0.8-0.1-1.2c0.1-0.3,0-0.7,0.1-1.1c0.3-6.5,6.4-10.9,10.6-10.8h110.1
    c8.5,0,16.9,6.6,16.9,14.8c0,8.2,6.6,14.8,14.8,14.8h92.6c8.2,0,14.8-6.6,14.8-14.8c0-8.2-6.6-14.8-14.8-14.8 M332.8,187.1h-21.2
    c-11.4,0-20.6-9.2-20.6-20.6c0-11.4,9.2-20.6,20.6-20.6h21.2c11.4,0,20.6,9.2,20.6,20.6C353.3,177.9,344.1,187.1,332.8,187.1z"
            />
            <g id="triforce">
              <path
                id="zelda_stroke"
                className="st1"
                d="M138.4,59.5h36.9l-18.5,32L138.4,59.5z M193.8,91.5l18.5-32h-36.9L193.8,91.5z M175.4,123.5
        l18.5-32h-36.9L175.4,123.5z"
              />
              <path
                id="zelda_dark_shadow"
                className="st0"
                d="M156.9,91.5l-18.5-32l18.5,10.7L156.9,91.5z M193.8,70.2l-18.5-10.7l18.5,32
        L193.8,70.2z M175.4,102.2l-18.5-10.7l18.5,32L175.4,102.2z"
              />
              <path
                id="zelda_light_shadow"
                className="st2"
                d="M175.4,59.5l-18.5,10.7l-18.5-10.7H175.4z M175.4,59.5l18.5,10.7l18.5-10.7H175.4z
         M156.9,91.5l18.5,10.7l18.5-10.7H156.9z"
              />
              <path
                id="zelda_highlight"
                className="st3"
                d="M150.6,66.6h12.5l-6.3,10.8L150.6,66.6z M193.8,77.4l6.3-10.8h-12.5L193.8,77.4z
         M175.4,109.4l6.3-10.8h-12.5L175.4,109.4z"
              />
            </g>
            <g id="monkey">
              <path
                id="foot_back"
                className="st4"
                d="M187.3,354.5c2.2-4.5,1.6-12.8-3.3-18.5l-9.3,2c2.2,3.5,8.3,7.7,2.3,20.8 c-1.9,4.2-0.8,8.7,4,8.7h22.3c6.5,0,5.3-7.9,2-10.5c-4.2-3.3-10.2-3.6-15.3-1C187.9,357.1,185.3,358.7,187.3,354.5z"
              />
              <path
                id="foot_front"
                className="st5"
                d="M166.3,354.5c2.2-4.5,1.6-12.8-3.3-18.5l-9.3,2c2.2,3.5,8.3,7.7,2.3,20.8 c-1.9,4.2-0.8,8.7,4,8.7h22.3c6.5,0,5.3-7.9,2-10.5c-4.2-3.3-10.2-3.6-15.3-1C166.9,357.1,164.3,358.7,166.3,354.5z"
              />
              <path
                id="body"
                className="st5"
                d="M199.8,299.3l9-55.5c0,0-2.1-3.6-7.2-7.1c1.4-1.2,2.2-3.1,1.8-5c-0.6-3.1-3.9-5.3-7.5-4.8 c-2.9,0.4-5,2.4-5.4,4.8l0,0c-7.2-1.9-16.5-1.9-29.5,1.6c-1.5-3.1-5.6-5.4-9.3-5.7c-5.5-0.4-9.3,3.7-9.7,9.3 c-0.3,4.4,2.2,8.3,6.1,9.9c-16,25.6-14.6,58.2-11,71.9c4.3,16.1,18.2,21.8,26.3,21.8c13,0,33.8-1.9,37.5-17.7 C202.9,315,202,303.9,199.8,299.3z"
              />
              <path
                id="rock"
                className="st6"
                d="M93.4,367.5H89 M104,367.5h144l-11,17.2c-0.9,1.4-2.5,2.3-4.2,2.3H203c-1.6,0-3,0.7-4,2l-40,52"
              />
              <path
                id="tail"
                className="st7"
                d="M89,315c2.2-15.2-23-13.2-21.6,4.8c1.7,22.3,24.4,22.1,42.5,9.1c10.8-7.8,15.3-1.8,19.1,1.1 c2.3,1.7,6.7,3.3,11-3"
              />
              <path
                id="face"
                className="st8"
                d="M213.7,245.2c0,0-6-2.9-11,0.2c-4.6,2.8-9.4,1.7-14,0c-4.6-1.7-16-5.1-19.2,2.6 c-2,3.8-2.3,9.7,3.8,16.3c-0.9,10.1-2.9,37.9,28.6,34.2c10.1-1.2,24.8-12.7,25.4-18.2s-1.7-7.4-6.5-6.5 c-1.3-6.5-2.3-12.9-10.7-11.8c-3.9,0.2,7.5,0,8.1-7.5C218.6,247.8,213.7,245.2,213.7,245.2z"
              />
              <path
                id="mouth"
                className="st9"
                d="M220.6,274.8c0,0-0.3,0.2-0.7,0.5c-0.2,0.2-0.6,0.3-1,0.5c-0.4,0.2-0.9,0.3-1.4,0.5 c-1,0.3-2.1,0.5-3.3,0.6c-1.2,0.2-2.4,0.3-3.7,0.5c-0.6,0.1-1.2,0.2-1.8,0.4c-0.6,0.1-1.1,0.3-1.7,0.5c-0.5,0.2-1,0.4-1.4,0.7 c-0.5,0.2-0.8,0.5-1.2,0.8c-0.4,0.2-0.6,0.6-0.9,0.9c-0.3,0.3-0.4,0.5-0.6,0.7c-0.3,0.4-0.5,0.7-0.5,0.7l0,0.1 c-0.2,0.2-0.5,0.3-0.7,0.1c-0.2-0.1-0.3-0.4-0.2-0.7c0,0,0.2-0.3,0.5-0.8c0.2-0.3,0.3-0.6,0.6-0.9c0.3-0.3,0.5-0.7,0.9-1 c0.4-0.3,0.8-0.7,1.3-1c0.5-0.3,1-0.6,1.6-0.9c0.6-0.2,1.2-0.5,1.8-0.7c0.6-0.2,1.3-0.3,1.9-0.5c1.3-0.3,2.5-0.5,3.7-0.7 c1.2-0.2,2.2-0.4,3-0.7c0.4-0.2,0.8-0.3,1.1-0.4c0.3-0.2,0.5-0.2,0.8-0.4c0.5-0.3,0.7-0.5,0.7-0.5c0.5-0.3,1.1-0.2,1.4,0.2 C221.2,273.9,221.1,274.5,220.6,274.8C220.6,274.8,220.6,274.8,220.6,274.8z"
              />
              <path
                id="nose_hole"
                className="st10"
                d="M213.2,266.3c0.6,0,1,0.5,0.9,1.1c0,0.6-0.5,1-1.1,0.9c-0.6,0-1-0.5-0.9-1.1
        C212.1,266.6,212.6,266.2,213.2,266.3z"
              />
              <path
                id="nose_hole_1_"
                className="st10"
                d="M208.1,266.9c0.6,0,1,0.5,0.9,1.1c0,0.6-0.5,1-1.1,0.9c-0.6,0-1-0.5-0.9-1.1
        C207.1,267.3,207.6,266.9,208.1,266.9z"
              />
              <path
                id="monkey-eye-r"
                className="st10"
                d="M205,253.5c1.1,0.1,1.9,1,1.9,2.1c-0.1,1.1-1,1.9-2.1,1.9c-1.1-0.1-1.9-1-1.9-2.1 C203,254.3,203.9,253.4,205,253.5z"
              />
              <path
                id="monkey-eye-l"
                className="st10"
                d="M191.5,254.6c1.4,0.1,2.4,1.3,2.3,2.7c-0.1,1.4-1.3,2.4-2.7,2.3c-1.4-0.1-2.4-1.3-2.3-2.7 C188.9,255.6,190.1,254.5,191.5,254.6z"
              />
              <path
                id="mongkey_shadow_1_"
                className="st0"
                d="M209.1,281c0.9-0.9,9.4-2.6,12-3c2.4-0.4-1.6,4.1-5,5S208.2,282,209.1,281z M143.6,237.1c-0.3,3.6,1.8,7,5.2,8.4c0.4,0.2,0.7,0.5,0.8,0.9c0.1,0.4,0.1,0.9-0.2,1.2c-15.1,24.2-14.7,56.3-10.8,70.8 c4,15.2,17.1,20.7,24.8,20.7c8.9,0,16.1-1,21.8-2.9c-67.5,2.2-35-81.7-33.3-87.3c0.2-0.8,1.2-4.4,1-5c-0.6-1.6-3.5-0.2-6-4 c-2.9-4.5,1.2-9.2,2.6-10.6C146.3,230.1,143.9,233,143.6,237.1z M201.7,297.5c7.8-0.9,17.9-8,22.3-13.3
        c-27.4,14.7-44.4,3.1-50.1-9.8c0.3,5.9,1.6,12.6,5.9,17.3C184.4,296.7,191.8,298.7,201.7,297.5z M208.6,261.2
        c-5.7,0.8-8.6-1.1-11.6,1.8c-2.8,2.7-7.7,4.6-3.8,4.1c3.9-0.6,10.1-3.4,16.8-4.1c0,0,0,0,0,0l-0.5,0c-0.2,0-0.3,0-0.4,0
        c-0.5,0-1-0.4-1-0.9C208.2,261.9,208.2,261.5,208.6,261.2z M198.4,300c0-0.1,0-0.1-0.1-0.2c-0.7,0-1.4,0.1-2,0.1
        c-7.8,0-13.9-2.3-18-6.8c-7.7-8.4-6.6-22.5-6.1-28.4c-5.6-6.2-5.6-11.5-4.6-15c-2,2.3-4.8,8.5,2.1,16.1c-3.9,6.4-5.4,26.5,9.2,36.2
        c7.2,4.8,16.6,5.3,20.8,2.8C199.5,302.9,199,301.2,198.4,300z"
              />
              <path
                id="belly"
                className="st11"
                d="M189.1,304c6.2,3,8.1,11.5,5.9,19c-2.3,7.4-9.8,10-16,7c-6.2-3-7.6-10.4-5.3-17.8
        S182.9,301.1,189.1,304z"
              />
              <path
                id="belly_button"
                className="st9"
                d="M191.2,322.3c0-0.1-0.1-0.2-0.2-0.2l-1.9-1.4l1-1.9c0.1-0.1,0.1-0.2,0-0.3
        c-0.1-0.2-0.4-0.4-0.7-0.3c-0.2,0-0.4,0.2-0.5,0.3l-0.9,1.7l-1.6-1.2c-0.2-0.1-0.3-0.1-0.5-0.1c-0.4,0.1-0.5,0.4-0.5,0.6
        c0,0.1,0.1,0.2,0.2,0.2l1.8,1.3l-1.1,2.1c-0.1,0.1-0.1,0.2,0,0.3c0.1,0.3,0.4,0.4,0.7,0.4c0.2,0,0.3-0.1,0.4-0.3l1-1.9l1.7,1.3
        c0.1,0.1,0.3,0.1,0.5,0.1C191.1,322.8,191.3,322.5,191.2,322.3z"
              />
              <g id="monkey_arm">
                <path
                  id="monkey-arm"
                  className="st5"
                  d="M164.3,344.1c-0.9-0.3-1.8-0.2-2.5,0.2c-0.3-0.2-0.6-0.3-0.9-0.4c-0.8-0.3-1.5-0.5-2.3-0.5
            c-0.1,0-0.2-0.1-0.3-0.3c-2.4-11.4-1.1-27.6,0.3-43.8c0-0.1,1.2-5.7-2.6-7.2c-5.2-2.1-5.5,2.5-5.5,2.7c-0.5,4.8-3.6,39,1.1,51.4
            c0,0.1,0,0.2,0,0.3c-0.4,0.5-0.7,1-0.9,1.7c-1.5,3.9,0.7,8.3,4.8,9.9c4.1,1.6,8.7-0.3,10.1-4.2c0.5-1.3,0.6-2.7,0.3-4
            c0-0.1,0-0.2,0.1-0.2c0.5-0.7,0.9-1.6,0.5-2.9C166.2,345.5,165.4,344.4,164.3,344.1z"
                />
                <g id="armpit">
                  <path
                    className="st12"
                    d="M165,296c0-4.3-1.8-10.8-6-12c-12.5-3.5-12.4,11.1-12.4,11.1s10.8-1.4,16.7,9.6
                C163.3,304.6,165,300.3,165,296z"
                  />
                  <path
                    className="st11"
                    d="M146.6,295.1c0,0,10.8-1.4,16.7,9.6"
                  />
                  <path className="st11" d="M144.4,296c0,0,8.7-6.6,19.2,0" />
                </g>
              </g>
            </g>
            <g id="tetris-path">
              <g id="tetris">
                <path
                  id="tetris_stroke"
                  className="st13"
                  d="M487.5,323.5h34v34h-34V323.5z M487.5,357.5h34v34h-34V357.5z M521.5,357.5h34v34h-34 V357.5z M555.5,357.5h34v34h-34V357.5z M555.5,391.5h34v34h-34V391.5z"
                />
                <path
                  id="tetris_dark_shadow"
                  className="st2"
                  d="M489,356l6-6c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H489z M489,390l6-6 c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H489z M523,390l6-6c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H523z M557,390l6-6 c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H557z M557,424l6-6c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H557z"
                />
                <path
                  id="tetris_light_shadow"
                  className="st0"
                  d="M520,356l-8-7.5v-13.9c0-1.4,0.6-2.7,1.6-3.6l6.4-6V356z M520,390l-8-7.5v-13.9 c0-1.4,0.6-2.7,1.6-3.6l6.4-6V390z M554,390l-8-7.5v-13.9c0-1.4,0.6-2.7,1.6-3.6l6.4-6V390z M588,390l-8-7.5v-13.9 c0-1.4,0.6-2.7,1.6-3.6l6.4-6V390z M588,424l-8-7.5v-13.9c0-1.4,0.6-2.7,1.6-3.6l6.4-6V424z"
                />
              </g>
            </g>
            <g id="stars">
              <path
                id="star1"
                className="st5"
                d="M652.6,332.5c-5.3,3.1-12.1,1.2-15.1-4.1l-1.4-2.4l1.4,2.4c3.1,5.3,1.2,12.1-4.1,15.1l-2.4,1.4 l2.4-1.4c5.3-3.1,12.1-1.2,15.1,4.1l1.4,2.4l-1.4-2.4C645.5,342.3,647.3,335.5,652.6,332.5l2.4-1.4L652.6,332.5z"
              />
              <path
                id="star2"
                className="st5"
                d="M503.4,73.7c-8,4.6-18.1,1.9-22.7-6.1l-2.1-3.6l2.1,3.6c4.6,8,1.9,18.1-6.1,22.7l-3.6,2.1l3.6-2.1 c8-4.6,18.1-1.9,22.7,6.1l2.1,3.6l-2.1-3.6C492.7,88.4,495.4,78.3,503.4,73.7l3.6-2.1L503.4,73.7z"
              />
              <path
                id="star3"
                className="st5"
                d="M330.4,335.7c-8,4.6-18.1,1.9-22.7-6.1l-2.1-3.6l2.1,3.6c4.6,8,1.9,18.1-6.1,22.7l-3.6,2.1 l3.6-2.1c8-4.6,18.1-1.9,22.7,6.1l2.1,3.6l-2.1-3.6C319.7,350.4,322.4,340.3,330.4,335.7l3.6-2.1L330.4,335.7z"
              />
              <path
                id="star4"
                className="st5"
                d="M135.6,176.5c-5.3,3.1-12.1,1.2-15.1-4.1l-1.4-2.4l1.4,2.4c3.1,5.3,1.2,12.1-4.1,15.1l-2.4,1.4 l2.4-1.4c5.3-3.1,12.1-1.2,15.1,4.1l1.4,2.4l-1.4-2.4C128.5,186.3,130.3,179.5,135.6,176.5l2.4-1.4L135.6,176.5z"
              />
            </g>
            <g id="moon">
              <path
                id="moon_body"
                className="st5"
                d="M641,34c26,0,47,21,47,47s-21,47-47,47s-47-21-47-47S615,34,641,34z"
              />
              <path
                id="moon_shades"
                className="st0"
                d="M622.5,55.9c1.3,2.3,0,5.8-3.1,7.7c-3,2-6.6,1.7-7.9-0.6c-1.3-2.3,0-5.8,3.1-7.7
        C617.6,53.3,621.1,53.6,622.5,55.9z M628.8,94.1c-4.1-6.1-11.6-9-16.7-6.4c-5.1,2.6-5.9,9.6-1.7,15.7c4.1,6.1,11.6,9,16.7,6.4
        C632.2,107.2,632.9,100.2,628.8,94.1z M644.5,109c-3.6,0-6.5,2.2-6.5,5s2.9,5,6.5,5s6.5-2.2,6.5-5S648.1,109,644.5,109z
         M645.7,95.8c-2.3-1.2-5-0.5-6,1.4c-1,2,0,4.5,2.3,5.7c2.3,1.2,5,0.5,6-1.4C649,99.6,648,97,645.7,95.8z M686.5,81
        c0-25.1-20.4-45.5-45.5-45.5c-16.1,0-30.2,8.4-38.3,21c7.9-5.9,17.7-9.5,28.3-9.5c26,0,47,21,47,47c0,6.3-1.3,12.3-3.5,17.8
        C681.9,103.6,686.5,92.8,686.5,81z"
              />
            </g>
            <g id="number_4">
              <path
                id="number_4_outline"
                className="st1"
                d="M379.5,235.5c0-4.9-3.9-9.1-8.7-9.1h-11.4v-72.5c0-9.1-8.5-15.7-17.6-15
        c-6,0-11.8,3.1-15.1,8l-52.7,79.8c-1.2,2.1-2.1,4.5-2.1,6.6c0,6.6,5,11.1,10.3,11.1H339v24.3c0,5.6,4.3,10.1,9.9,10.1
        c6,0,10.5-4.5,10.5-10.1v-24.3h11.4C375.6,244.3,379.5,240.4,379.5,235.5z M339,226.4h-45.5l45.5-67.8V226.4z"
              />
              <path
                id="number_4_inner_lines"
                className="st14"
                d="M349,158v109.2 M345.9,147c-5.6,0-10.9,2.8-14,7.2l-47.1,69.5
        c-1.2,1.9-3.3,4.3-3.6,5.8c-0.8,4.6,2.3,5.5,7.3,5.5H340 M359.5,235H379 M342,232l-4,7 M345,232l-4,7 M358,232l-4,7 M361,232l-4,7"
              />
              <path
                id="number_4_dots"
                className="st10"
                d="M349,266c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9
        C346.1,267.3,347.4,266,349,266z M349,155.1c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9S347.4,155.1,349,155.1
        z M344.4,144.6c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9C341.4,145.9,342.7,144.6,344.4,144.6z"
              />
            </g>
            <g id="number_4_2">
              <path
                id="number_4_outline_2"
                className="st1"
                d="M627,235.5c0-4.9-3.9-9.1-8.7-9.1h-11.4v-72.5c0-9.1-8.5-15.7-17.6-15
        c-6,0-11.8,3.1-15.1,8l-52.7,79.8c-1.2,2.1-2.1,4.5-2.1,6.6c0,6.6,5,11.1,10.3,11.1h56.7v24.3c0,5.6,4.3,10.1,9.9,10.1
        c6,0,10.5-4.5,10.5-10.1v-24.3h11.4C623.1,244.3,627,240.4,627,235.5z M586.5,226.4H541l45.5-67.8V226.4z"
              />
              <path
                id="number_4_inner_lines_2"
                className="st14"
                d="M596.5,158v109.2 M593.3,147c-5.6,0-10.9,2.8-14,7.2l-47.1,69.5
        c-1.2,1.9-3.3,4.3-3.6,5.8c-0.8,4.6,2.3,5.5,7.3,5.5h51.5 M607,235h19.5 M589.5,232l-4,7 M592.5,232l-4,7 M605.5,232l-4,7
         M608.5,232l-4,7"
              />
              <path
                id="number_4_dots_2"
                className="st10"
                d="M596.5,266c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9
        C593.6,267.3,594.9,266,596.5,266z M596.5,155.1c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9
        S594.9,155.1,596.5,155.1z M591.8,144.6c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9
        C588.9,145.9,590.2,144.6,591.8,144.6z"
              />
            </g>
            <g id="number_0">
              <path
                id="number_0_outline"
                className="st1"
                d="M502,208.9c0-34-15.9-70.9-54-70.9c-38.3,0-54,36.9-54,70.9s15.7,71.1,54,71.1
        C486.1,280,502,242.9,502,208.9z M481.1,208.9c0,26.8-8.7,53-33.1,53c-24.6,0-33.1-26.2-33.1-53c0-26.8,8.5-52.8,33.1-52.8
        C472.4,156.1,481.1,182.1,481.1,208.9z"
              />
              <path
                id="number_0_inner_lines"
                className="st15"
                d="M487.2,175.7c-6.7-16.8-19.3-29.4-39.2-29.4c-32,0-45.1,32.5-45.1,62.4
        s13.1,62.6,45.1,62.6c31.8,0,44.1-32.6,44.1-62.6 M487.5,172c3,0,5.5,2.5,5.5,5.5c0,3-2.5,5.5-5.5,5.5c-3,0-5.5-2.5-5.5-5.5
        C482,174.5,484.5,172,487.5,172z M492.5,202c3,0,5.5,2.5,5.5,5.5c0,3-2.5,5.5-5.5,5.5c-3,0-5.5-2.5-5.5-5.5
        C487,204.5,489.5,202,492.5,202z"
              />
              <path
                id="number_0_dots"
                className="st10"
                d="M492.5,205c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5
        C490,206.1,491.1,205,492.5,205z M487.5,175c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5
        C485,176.1,486.1,175,487.5,175z M448.1,143.4c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9
        C445.1,144.7,446.4,143.4,448.1,143.4z M448.1,268.3c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9
        C445.1,269.6,446.4,268.3,448.1,268.3z"
              />
            </g>
            <g id="sword-path">
              <g id="sword">
                <path
                  id="sword_handle"
                  className="st5"
                  d="M444.6,196.6l0.6-0.8c1.5-2,1.8-4.3,3.8-2.8l8.9,6.8c2,1.5,2.4,4.3,0.9,6.3l-0.6,0.8 c-1.5,2-4.3,2.4-6.3,0.9L443,201C441,199.5,443.1,198.5,444.6,196.6z"
                />
                <path
                  id="sword_handle_line"
                  className="st14"
                  d="M453.9,197c2,1.5,2.4,4.3,0.9,6.3l-0.6,0.8c-1.5,2-4.3,2.4-6.3,0.9"
                />
                <path
                  id="sword_hilt"
                  className="st5"
                  d="M432.5,197.1l10.6-13.9c1.6-2.2,4.7-2.6,6.9-0.9c2.2,1.6,2.6,4.7,0.9,6.9l-10.6,13.9 c-1.6,2.2-4.7,2.6-6.9,0.9C431.2,202.4,430.8,199.3,432.5,197.1z"
                />
                <polygon
                  id="sword_blade"
                  className="st1"
                  points="437,199 446,187.3 387.3,138.9 366.3,136.7 372.2,154   "
                />
                <polygon
                  id="sword_blade_shadow"
                  className="st0"
                  points="436.7,197 440.3,192.3 369,138.5 368.5,138.4 373.5,153  "
                />
              </g>
            </g>
          </svg>
        </div>,
      ),
    ).toEqual(true);
  });
});
