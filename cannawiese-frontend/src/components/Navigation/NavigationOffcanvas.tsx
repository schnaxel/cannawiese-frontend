import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from "next/link";

function OffCanvasMenu(props: { navigationItems: { href: string, label: string }[], pathname: string }): JSX.Element {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <>
            <Button variant="" onClick={handleToggle} className={'pe-0 border-0'}>
                <i className="bi bi-list fs-2 text-beige"></i>
            </Button>
            <Offcanvas show={show} onHide={handleToggle} placement={'top'} style={{height: '100vh'}}>

                <Offcanvas.Header onClick={handleToggle} closeButton closeVariant={'white'} className={'text-beige bg-secondary'}>
                    Menü schließen
                </Offcanvas.Header>
                <Offcanvas.Body className={'bg-secondary'}>
                    <ul className="navbar-nav">
                        {props.navigationItems.map(({href, label}, index) => (
                            <li key={index} className={'nav-item'}>
                                <Link href={href}
                                      scroll={false}
                                      onClick={handleToggle}
                                      className={`nav-link text-nowrap fs-4 border-bottom text-beige ${props.pathname === href ? 'fw-medium border-2 border-tertiary' : 'border-beige'}`}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasMenu;