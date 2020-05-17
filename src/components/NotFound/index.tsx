import React from "react";

import { Button } from "reactstrap";

const NotFound: React.FC = () => {
	return (
		<div className="">
          

          

            
            <div className="">
                <p>Sorry but we were not able to find it</p>

              <div className="">
                <Button onClick={() => window.location.replace('/')}>Check our amazing books</Button>
              </div>
            </div>
        </div>
  	);
};

export default (NotFound);