"use client";

import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Contact from "@/app/_components/Contact/Contact";
import Banner from "@/app/_components/Banner/Banner";
import './page.css';
import Link from "next/link";

export default function GDPRPage() {
    const breadcrumbs = [
        { text: "Domů", url: "/" },
        { text: "Zpracování osobních údajů", url: "/zpracovani-osobnich-udaju/" },
    ];

    return (
        <>
            <Navbar/>
            <Banner headingText="Zpracování osobních údajů" breadcrumbs={breadcrumbs}/>
            <main>
                <section className="gdpr" id="gdpr">
                    <div className="container">
                        <div className="row">
                            <div className="item">
                                <h2>Kdo je správce?</h2>
                                <p className="sm">
                                    Správcem vašich osobních údajů je CliniPharma s.r.o, která poskytuje služby a zajišťuje ochranu vašich osobních údajů dle platné legislativy, včetně GDPR.
                                </p>
                            </div>
                            <div className="item">
                                <h2>Kontaktní údaje pro ochranu osobních údajů</h2>
                                <p className="sm">
                                    Pokud máte jakékoliv dotazy týkající se ochrany osobních údajů, můžete nás kontaktovat na následujících kontaktech:
                                </p>
                                <ul>
                                    <li>E-mailová adresa: <Link aria-label="Napište email prodej@clinipharma.cz" rel="noopener norefferer" target="_blank" href="mailto:prodej@clinipharma.cz">prodej@clinipharma.cz</Link></li>
                                    <li>Telefonní číslo: <Link aria-label="Zavolejte na číslo 602 243 441" rel="noopener norefferer" target="_blank" href="tel:602243441">+420 602 243 441</Link></li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>Účel zpracování osobních údajů</h2>
                                <p className="sm">
                                    Osobní údaje jsou zpracovávány pro následující účely:
                                </p>
                                <ul>
                                    <li><span>Vedení účetnictví</span>: Pro vystavování a evidenci daňových dokladů (fakturační údaje).</li>
                                    <li><span>Analýza a správa webu</span>: Použití nástrojů pro analýzu návštěvnosti a optimalizaci webových stránek.</li>
                                    <li><span>Komunikace a zpracování objednávek</span>: Zpracování údajů pro realizaci objednávek, fakturaci a komunikaci ohledně zakázek.</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>Zpracovatelé osobních údajů</h2>
                                <p className="sm">
                                    Pro zajištění některých konkrétních zpracovatelských operací využíváme služeb třetích stran, kteří se na dané zpracování specializují a jsou v souladu s GDPR.
                                </p>
                                <p className="sm">
                                    Mezi hlavní zpracovatele osobních údajů patří:
                                </p>
                                <ul>
                                    <li>externí účetní společnost pověřená zpracování daňových údajů</li>
                                    <li><span>Analytické nástroje: Google Analytics</span> - shromažďování a analýza statistiky návštěvnosti webu.Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.Pro zajištění odpovídající úrovně ochrany údajů při předávání dat do USA byly použity <span>standardní smluvní doložky (SCCs)</span>, jak stanoví pravidla EU pro předávání osobních údajů do třetích zemí.</li>
                                    <li>externí programátor pověřený vytvoření a správou webové stránky společnosti</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>Předávání osobních údajů třetím stranám</h2>
                                <p className="sm">
                                    K vašim osobním údajům mají přístup pouze naši zaměstnanci a spolupracovníci, kteří jsou vázáni mlčenlivostí a proškoleni v oblasti bezpečnosti zpracování osobních údajů.
                                </p>
                                <p className="sm">
                                    V případě potřeby využíváme externí zpracovatele pro zajištění specifických operací, jako jsou analytické nástroje (např. Google Analytics), kteří zpracovávají údaje v souladu s GDPR.
                                </p>
                            </div>
                            <div className="item">
                                <h2>Předávání dat mimo EU</h2>
                                <p className="sm">
                                    Osobní údaje jsou zpracovávány výhradně v Evropské unii nebo v zemích, které zajišťují odpovídající úroveň ochrany na základě rozhodnutí Evropské komise.
                                </p>
                                <p className="sm">
                                    Pokud jsou data předávána do USA, jsou v souladu s GDPR použity <span>standardní smluvní doložky (SCCs)</span> pro zajištění odpovídající úrovně ochrany údajů.
                                </p>
                            </div>
                            <div className="item">
                                <h2>Doba uchovávání osobních údajů</h2>
                                <p className="sm">
                                    Osobní údaje uchováváme po dobu nezbytnou pro splnění účelu, pro který byly shromážděny, tzn. po celou dobu trvání smluvního vztahu společnosti se zákazníkem, a to v souladu se zákonnými lhůtami pro uchovávání údajů (např. pro účetní účely a promlčecí lhůty).
                                </p>
                            </div>
                            <div className="item">
                                <h2>Práva subjektu údajů</h2>
                                <p className="sm">
                                    Máte řadu práv v souvislosti s vašimi osobními údaji, včetně práva na:
                                </p>
                                <ul>
                                    <li><span>Právo na přístup</span> Můžete se kdykoli informovat o tom, jaké osobní údaje o vás zpracováváme.</li>
                                    <li><span>Právo na opravu</span> Můžete požádat o opravu nebo doplnění vašich osobních údajů.</li>
                                    <li><span>Právo na výmaz</span> Pokud už nejsou údaje potřebné pro účely zpracování, můžete požádat o jejich vymazání.</li>
                                    <li><span>Právo na omezení zpracování</span> Pokud se domníváte, že zpracováváme vaše nepřesné údaje, můžete požádat o jejich omezení.</li>
                                    <li><span>Právo na přenositelnost</span> Máte právo na přenos vašich údajů v strojově čitelné formě.</li>
                                    <li><span>Právo vznést námitky</span> Můžete vznést námitky proti zpracování vašich osobních údajů.</li>
                                </ul>
                                <p className="sm">Pro uplatnění práv nás prosím kontaktujte na e-mailové adrese: <Link aria-label="Napište email prodej@clinipharma.cz" rel="noopener norefferer" target="_blank" href="mailto:prodej@clinipharma.cz">prodej@clinipharma.cz</Link></p>
                            </div>
                            <div className="item">
                                <h2>Podání stížnosti</h2>
                                <p className="sm">
                                    Máte-li za to, že vaše osobní údaje zpracováváme protiprávně, máte rovněž právo
                                    podat stížnost příslušnému dozorovému úřadu. Vedoucím dozorovým úřadem, který je
                                    příslušný pro otázky zpracování osobních údajů, je český Úřad pro ochranu osobních
                                    údajů . Budeme však rádi, pokud budete přešlapy řešit nejprve s námi. Vždy nás můžete
                                    snadno kontaktovat prostřednictvím našeho kontaktního formuláře, emailem nebo
                                    telefonicky.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Contact/>
            <Footer/>
        </>
    )
}