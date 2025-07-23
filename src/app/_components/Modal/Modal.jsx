'use client'
import React, { useEffect, useState } from 'react';
import './Modal.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CopyRow = ({ label, value }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // Show check icon for 2 seconds
    };

    return (
        <div className="copy-row">
            <img
                onClick={handleCopy}
                src={copied ? "/images/icon-check.svg" : "/images/icon-copy.svg"}
                alt={copied ? "Check Icon" : "Copy Icon"}
                width={24}
                height={24}
                draggable={false}
                loading="lazy"
            />
            <div>
                <span>{label}</span> <span className="value">{value}</span>
            </div>
        </div>
    );
};

const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleClickOutside = (event) => {
        if (event.target.className === 'modal-overlay') {
            onClose();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            AOS.refresh();
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <dialog className="modal-overlay">
            <div className="modal-content flex justify-center items-center" data-aos="fade-up" data-aos-duration="300">
                <div className="modal-close-container">
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                <h2>Bank Details</h2>

                <CopyRow label="Company:" value="CliniPharma s.r.o" />
                <CopyRow label="Headquarters:" value="Viklefova 1795/10, 130 00 Praha 3, Česká republika" />
                <CopyRow label="Address:" value="Vadovce 64, 916 13 Vadovce, Slovensko" />
                <CopyRow label="Business ID:" value="24672769" />
                <CopyRow label="VAT ID:" value="CZ24672769" />
                <CopyRow label="Email:" value="info@clinipharma.cz" />
                <CopyRow label="Bank:" value="ČSOB Nymburk" />
                <CopyRow label="Bank Address:" value="náměstí Přemyslovců 15/10, 288 02 Nymburk" />

                <h3>EUR account</h3>
                <CopyRow label="Account number:" value="254146747/0300" />
                <CopyRow label="BIC/SWIFT:" value="CEKOCZPP" />
                <CopyRow label="IBAN:" value="CZ45 0300 0000 0002 5414 6747" />

                <h3>USD account</h3>
                <CopyRow label="Account number:" value="277970245/0300" />
                <CopyRow label="BIC/SWIFT:" value="CEKOCZPP" />
                <CopyRow label="IBAN:" value="CZ50 0300 0000 0002 7797 0245" />

                <h3>CZK account</h3>
                <CopyRow label="Account number:" value="236569834/0300" />
                <CopyRow label="BIC/SWIFT:" value="CEKOCZPP" />
                <CopyRow label="IBAN:" value="CZ25 0300 0000 0002 3656 9834" />
            </div>
        </dialog>
    );
};

export default Modal;
