import Isotope from 'isotope-layout';
import React, { useEffect, useRef, useState } from 'react';
import CollectionData from '../../jsonData/CollectionData'
import SingleCollectionGallery from '../collection/SingleCollectionGallery';

const CollectionGallery = () => {
    const galleryRef = useRef(null);
    const [filter, setFilter] = useState('*')

    useEffect(() => {
        const iso = new Isotope(galleryRef.current, {
            itemSelector: '.gallery-item',
            layoutMode: 'fitRows',
            filter: filter,
        });

        return () => {
            iso.destroy();
        };
    }, [filter]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    useEffect(() => {
        handleFilterChange('*');
    }, []);

    return (
        <>
            <section className="collection-section rel z-1 pt-115 pb-90 rpt-95 rpb-70">
                <div className="container">
                    <div className="collection-filter-area mb-60">
                        <div className="section-title mb-45">
                        <span className="sub-title">Our Collections</span>
<h2>Explore Our Software Solutions</h2>
</div>
<ul className="collection-filter">
    <li onClick={() => handleFilterChange('*')}>All Services</li>
    <li onClick={() => handleFilterChange('.web-development, .mobile-apps, .ui-ux')}>Web & Mobile Development</li>
    <li onClick={() => handleFilterChange('.cloud, .devops')}>Cloud & DevOps Solutions</li>
    <li onClick={() => handleFilterChange('.cyber-security, .data-protection')}>Cybersecurity & Data Protection</li>
    <li onClick={() => handleFilterChange('.consultation, .digital-transformation')}>Consulting & Digital Transformation</li>
    <li onClick={() => handleFilterChange('.enterprise-solutions')}>Enterprise Software Solutions</li>
    <li onClick={() => handleFilterChange('.custom-software, .application-development')}>Custom Software Development</li>
    <li onClick={() => handleFilterChange('.artificial-intelligence, .machine-learning')}>AI & ML Solutions</li>
</ul>
</div>
                    <div className='row' ref={galleryRef}>
                        {CollectionData.map((collection) => (
                            <div className={`col-xl-3 col-lg-4 col-sm-6 gallery-item ${collection.category}`} key={collection.id}>
                                <SingleCollectionGallery collection={collection} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CollectionGallery;