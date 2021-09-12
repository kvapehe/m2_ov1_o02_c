input.onButtonPressed(Button.A, function () {
    tallet = tallet * 2
    if (tallet % startigjen0 == 0) {
        tallet = minstetall
    } else {
        basic.clearScreen()
    }
    basic.showNumber(tallet)
    OLED.writeNumNewLine(tallet)
})
input.onButtonPressed(Button.B, function () {
    tallet = tallet / 2
    if (tallet < minstetall) {
        tallet = 1
    } else {
        basic.clearScreen()
    }
    basic.showNumber(tallet)
    OLED.writeNumNewLine(tallet)
})
/**
 * Mutipliserer med A og "dividerer" med med B
 * 
 * Ved å teste på om verdi blir 0 så kan en dividere evig.
 * 
 * Ved å teste om modulus er et tall som ikke går opp i mutiplikasjon med 2 så dobles tallet. Da følges oppgaveteksten.
 * 
 * Denne versjonen har max = 8 og min = 1, for å unngå "scrolling"
 * 
 * Hmm eksperiment med test mot 0 gir desimaltall, men ved å sette variablene minstetall til 0 og så teste mot 
 * 
 * denne virket ikke som forventet. Litt rart i grunn.
 * 
 * Unngå å multiplisere forbi 8. pga. "scrolling", og test med modulus og if. Dette kan endres ved å sette variablene for
 * 
 * startigjen. NB pass på å bruke faktor med 2 som grunntall.
 * 
 * 1, 2, 4, 8, 16, 32, 64
 * 
 * Når det deles kan en bruke enten * 0.5 eller / 2
 * 
 * Det kan være lurt å alltid multiplisere siden å dele på 0 kan gi artige resultater. Å gange med 0 derimot fører mer til en logisk feil. Tips til meg når en vil unngå avrundingsfeil er ¨multiplisere med f.eks. 1000 først så dividere og så multiplisere med 0.001 etterpå. Det hender det er lurt å gjøre.
 * 
 * I denne oppgaven er et LCD-display benyttet for å se "store" tall.
 * 
 * Enkelt om en legger til utvidelser, og hjelper i feilsøking når Mbit lever sitt eget liv. Ulempen er nok ekstra tid og mas på Mbit.
 * 
 * Teller opp med A og ned med B Blokker som ikkke er i bruk kan slettes, men hvorfor ikke bare la de leve i prosjektet.
 * 
 * Det er letter å hente de inn da. Og er di i vene, så putt de inni en blokk som ikke brukes og legg denne langt avgårde i bildet.
 * 
 * Noen eksperimenter for å teste makecode.org.
 * 
 * Telle opp reset til 0
 * 
 * Telle ned reset til 9
 * 
 * Lurt å teste på enkle ting for å brukes senere.
 * 
 * Lyden er med for å se det er liv i Mbit.
 * 
 * Endrer nok intervall etter hvert.
 */
let startigjen0 = 0
let minstetall = 0
let tallet = 0
OLED.init(128, 64)
tallet = 1
minstetall = 1
minstetall = 8
startigjen0 = startigjen0
basic.showNumber(tallet)
basic.forever(function () {
    music.ringTone(262)
    basic.pause(10)
    music.rest(music.beat(BeatFraction.Whole))
    basic.pause(9000)
})
