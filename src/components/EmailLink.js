import React from 'react';

const EmailLink = ({ email }) => {
    const [user, domain] = email.split('@');
    
    return (
        <p>
            <a href={`mailto:${email}`}>
                {user}&nbsp;@&nbsp;{domain}
            </a>
        </p>
    );
};

export default EmailLink;
