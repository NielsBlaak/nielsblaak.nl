import React from 'react';
import { Helmet } from 'react-helmet';
import krat from '../images/krat.jpeg';
import feed from '../feed/topfeed.xml';

const Item = () => {
    return (
        <>
            <Helmet>
                <script type="application/ld+json">{`
                    {
                        "@context": "https://www.schema.org",
                        "@type": "product",
                        "name": "Krat Hertog Jan",
                        "image": 'nielsblaak.nl${krat}',
                        "description": "Een kratje pils, wie is er niet groot mee geworden?",
                        "brand": "Hertog Jan",
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "EUR",
                            "price": "10",
                            "itemCondition": "http://schema.org/NewCondition",
                            "availability": "http://schema.org/InStock",
                            "seller": {
                              "@type": "Organization",
                              "name": "NielsBlaak.nl"
                        }
                    }
                `}</script>
            </Helmet>
            <div className="bg-blue rounded-md">
                <h1>Krat bier</h1>
                <p>Een kratje pils, wie is er niet groot mee geworden?</p>
                <span className="text-green-500">€10</span>
                <img src={krat} alt="Krat bier" className="w-24 h-24" />
                <a
                    href={feed}
                    download
                >
                    Download feed
                </a>
            </div>
        </>
    );
};

export default Item;
