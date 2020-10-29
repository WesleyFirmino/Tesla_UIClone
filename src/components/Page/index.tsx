import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';
import { Container, Spacer } from './styles';
import UniqueOverlay from './UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',         
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven'
          ].map(modelName => (
            <ModelSection
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent 
                label={modelName}
                description="Order Online for Delivery"
              />               
            }
          />
          ))}          
        </div>
        <Spacer></Spacer>              
        <UniqueOverlay></UniqueOverlay>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;

