'use client'
import React from 'react';
import Link from "next/link";


const Footer: React.FC = () => {
    return (
        <footer className={'bg-beige'}>
            <div className="container">
                <div className="row py-3">
                    <div className={'col-6'}>
                        <Link  href={'https://maps.app.goo.gl/YhAL6UNVo8VA4Ex29'} rel="noopener" target="_blank" className={'pe-2'}>
                            <i className="bi bi-geo-alt"></i> Husum
                        </Link>
                        <Link href={'tel:+49484172222'} className={'px-2'}>
                            <i className="bi bi-telephone"></i> 04841 / 7 22 22
                        </Link>
                        <Link href={'mailto:info@tischlerei-sp.de'} className={'ps-2'}>
                            <i className="bi bi-envelope-at"></i> info@tischlerei-sp.de
                        </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link href={'/'} className={'pe-2 border-end border-2 border-tertiary'}>Startseite</Link>
                        <Link href={'/impressum/'}
                              className={'px-2 border-end border-2 border-tertiary'}>Impressum</Link>
                        <Link href={'/datenschutz/'} className={'ps-2'}>Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;