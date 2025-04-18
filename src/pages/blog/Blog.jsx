import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import BlogPageContent from './BlogPageContent';
import FooterV2 from '../../components/footer/FooterV2';

const Blog = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Blog page" pageLink=""
            image={"/images/gallery/blog00.jpg"}
            description={"We’re here to share stories, insights, and ideas from the  <br/>world of tech and innovation. From coding tips to industry  <br/>trends we break it down in a way that’s easy to follow and <br/> fun to explore. Whether you're a developer, a business owner <br/> or just tech-curious, there’s something here for you."} />
            <BlogPageContent />
            <FooterV2 />
        </>
    );
};

export default Blog;