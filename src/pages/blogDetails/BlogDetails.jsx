import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import BlogDetailsContent from './BlogDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';

const BlogDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Blog" pageLink=""
            image={"/images/gallery/dig2.jpg"}
            description={"We’re here to share stories, insights, and ideas from the  <br/>world of tech and innovation. From coding tips to industry  <br/>trends we break it down in a way that’s easy to follow and <br/> fun to explore. Whether you're a developer, a business owner <br/> or just tech-curious, there’s something here for you."} />
            <BlogDetailsContent />
            <FooterV2 />
        </>
    );
};

export default BlogDetails;