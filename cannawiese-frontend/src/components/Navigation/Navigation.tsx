'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import NavigationOffcanvas from "@/src/components/Navigation/NavigationOffcanvas";

export function Navigation() {
    const pathname = usePathname()
    const navigationItems = [
        {href: '/', label: 'Start'},
        {href: '/leistungen/', label: 'Leistungen'},
        {href: '/referenzen/', label: 'Referenzen'},
        {href: '/kontakt/', label: 'Kontakt'},
    ]
    return (
        <>
            {/* Navigation Desktop */}
            <nav className={"navbar navbar-expand user-select-none p-0 d-none d-lg-flex bg-secondary"}>
                <div className={'container py-3 align-items-center justify-content-between'}>
                    <Link href={'/'} scroll={false} className={'navbar-brand p-0'}>
                        <img src="/images/logoCannawiese.png" alt="Logo Cannawiese" height={'80px'}
                             className={"d-inline-block align-text-top"} draggable={"false"}/>
                    </Link>
                    <ul className="navbar-nav">
                        {navigationItems.map(({href, label}, index) => (
                            <li key={index} className={'nav-item'}>
                                <Link href={href}
                                      scroll={false}
                                      className={`nav-link text-nowrap fs-4 text-beige p-0 ms-5 ${pathname === href ? 'fw-medium border-bottom border-2 border-tertiary' : ''}`}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Navigation Mobil */}
            <nav className="navbar d-lg-none user-select-none bg-secondary">
                <div className="container d-flex justify-content-around">
                    <div style={{width: '44px'}}></div>
                    <Link href={'/'} scroll={false} className={'navbar-brand align-self-center m-0'}>
                        <img src="/images/logoCannawiese.png" alt="Logo Cannawiese" height={'80px'}
                             className={""} draggable={"false"}/>
                    </Link>
                    <NavigationOffcanvas navigationItems={navigationItems} pathname={pathname}/>
                </div>
            </nav>
        </>
    )
}