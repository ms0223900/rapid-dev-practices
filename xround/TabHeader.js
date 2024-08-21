let tabs = [
    {
        link: 'https://xround.us/products/test-xround-hear-solutions',
        label: 'OTC Hearing Aids',
    },
    {
        link: 'https://xround.us/products/xround-assistive-listening-solution',
        label: 'Assistive Listening Devices',
    },
    {
        link: '#',
        label: 'Consumer Audio',
    },
    {
        link: '#',
        label: 'Hearing Protection',
    },
    {
        link: '#',
        label: 'Technology',
    },
];

export function TabHeader({ activeLabel }) {
    return <div className={'tab-header-link-list'}>
        {tabs.map(tab => {
            const active = activeLabel === tab.label;
            return (
                <a key={tab.label} href={tab.link} className={active ? 'active' : ''}>
                    {tab.label}
                </a>
            );
        })}
    </div>;

}
