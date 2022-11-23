import React from 'react';
import ChatHeader from './ChatHeader';
export default function RightComponent() {

    return (
        <div class="col-md-8 col-12 card-stacked">
            <div class="card shadow-line mb-3 chat chat-panel">
                <ChatHeader
                is_right ={true}
                />
            </div>
        </div>
    );

}