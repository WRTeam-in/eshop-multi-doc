import React from 'react';
import DocItem from '@theme-original/DocItem';
import SectionNavigator from '@site/src/components/SectionNavigator';

export default function DocItemWrapper(props) {
    return (
        <>
            <DocItem {...props} />
            <SectionNavigator />
        </>
    );
} 