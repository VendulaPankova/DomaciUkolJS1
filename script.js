
//Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno

const jmeno = prompt("zadejte své jméno bez diakritiky:").trim() //bez bílých znaků

// pak příjmení

const prijmeni  = prompt("Zde zadej své přijmení bez diakritiky").trim()

const castjmena = jmeno.slice(0, 3).toLowerCase()
const castPrijmeni  = prijmeni.slice(0, 5).toLowerCase()


const email = ` ${castPrijmeni}${castjmena}@fit.cvut.cz   `// Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz 
                                                            // ...catsPrijmenicastjmena@fit.cvut.cz.

document.querySelector("#email-container").innerHTML = `

<p>Vaše vygenerovaná emailová adresa je:<strong>${email}</strong></p>





                                                    `                                                            








