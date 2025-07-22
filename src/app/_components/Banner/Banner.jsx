import React from "react";
import './Banner.css';
import Link from 'next/link';

export default function Banner({ headingText, breadcrumbs = [] }) {
    return (
        <section className="banner" id="banner">
            <div className="container">
                <h4 className='paths'>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <React.Fragment key={index}>
                            <Link href={breadcrumb.url} rel="noopener noreferrer" aria-label={`Odkaz na ${breadcrumb.text}`}>
                                {breadcrumb.text}
                            </Link>
                            {index < breadcrumbs.length - 1 && <span> / </span>}
                        </React.Fragment>
                    ))}
                </h4>
                <h1>{headingText}</h1>
            </div>
        </section>
    );
}