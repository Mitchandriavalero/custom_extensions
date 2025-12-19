/**
 * MakeCode extension – gefixt & opgeschoond
 */

//% color="#AA278D" weight=200
namespace area {

    //% block="oppervlakte cirkel straal %radius"
    export function area_Circle(radius: number): number {
        return radius * radius * Math.PI
    }

    //% block="oppervlakte rechthoek lengte %length breedte %width"
    export function area_Rectangle(length: number, width: number): number {
        return length * width
    }
    //% block="lengte %lenght breedte %widht hoogte %height"
    export function area_Volume(length: number, width: number, height: number) {
        return length * width * height
    }

    //% block="gemiddelde van %getallen"
    export function area_Average(getallen: number[]): number {
        let som = 0
        for (let i = 0; i < getallen.length; i++) {
            som += getallen[i]
        }
        return getallen.length > 0 ? som / getallen.length : 0
    }
}

//% color="#0AE2FF" weight=190
namespace basic_extra {

    export enum PauseTime {
        //% block="1 seconde"
        Basic_Time_OneSecond = 1000,
        //% block="2 seconden"
        Bacis_Time_TwoSeconds = 2000,
        //% block="5 seconden"
        Basic_Time_FiveSeconds = 5000,
        //% block="10 seconden"
        Basic_Time_TenSeconds = 10000,
        //% block="30 seconden"
        Basic_Time_ThirtySeconds = 30000,
        //% block="60 seconden"
        Basic_Time_SixtySeconds = 60000
    }

    //% block="pauzeer %time"
    export function Basic_Check_Pause(time: PauseTime): void {
        control.waitMicros(time * 1000)
    }
}

//% color="#D426C8" weight=180
namespace custom_block {

    export enum Multi_Choose {
        //% block="+"
        Multi_Plus,
        //% block="-"
        Multi_Minus,
        //% block="*"
        Multi_Multiply,
        //% block="/"
        Multi_Divide
    }

    //% block="Calculator %getal1 %calc %getal2"
    export function Calculator(getal1: number, calc: Multi_Choose, getal2: number): number {
        switch (calc) {
            case Multi_Choose.Multi_Plus:
                return getal1 + getal2;
            case Multi_Choose.Multi_Minus:
                return getal1 - getal2;
            case Multi_Choose.Multi_Multiply:
                return getal1 * getal2;
            case Multi_Choose.Multi_Divide:
                return getal1 / getal2;
            default:
                return 0;
        }
    }
}