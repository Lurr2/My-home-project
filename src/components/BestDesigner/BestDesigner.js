import React from 'react';
import data from '../../data.json';
import BestDesignerCard from '../common/BestDesignerCard/BestDesignerCard';


const BestDesigner = () => {
    return (
        <section>
            {data.BestDesignerData.map(designer => (
                <BestDesignerCard
                key={designer.id}
                UpText={designer.UpText}
                DownText={designer.DownText}
                FooterText={designer.FooterText}
                image={designer.image}
                direction={designer.direction}
                />
            ))}


        </section>
    )
};

export default BestDesigner;