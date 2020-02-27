import React from 'react';
import "../../static/assets/styles/components/Blackboard.scss"

const Blackboard = () => {
    return (
        <div>
            <div className="mt-4 blackboard border-warning position-relative">
                <div className="whiteboard position-absolute"></div>
                <div className="whiteboard w-1 position-absolute"></div>
                <div className="whiteboard w-2 position-absolute"></div>
                <div className="whiteboard w-3 position-absolute"></div>
                <div className="whiteboard w-4 position-absolute"></div>
                <div className="draft position-absolute"></div>
            </div>
        </div>
    );
}

export default Blackboard;
