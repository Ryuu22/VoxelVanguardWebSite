function generateMetadata(title, description, imageUrl, url) {
    const metadata = document.createElement('meta');
    metadata.setAttribute('property', 'og:title');
    metadata.setAttribute('content', title);
    
    const metadata2 = document.createElement('meta');
    metadata2.setAttribute('property', 'og:description');
    metadata2.setAttribute('content', description);
    
    const metadata3 = document.createElement('meta');
    metadata3.setAttribute('property', 'og:image');
    metadata3.setAttribute('content', imageUrl);
    
    const metadata4 = document.createElement('meta');
    metadata4.setAttribute('property', 'og:url');
    metadata4.setAttribute('content', url);

    const metadataTwitter = document.createElement('meta');
    metadataTwitter.setAttribute('name', 'twitter:card');
    metadataTwitter.setAttribute('content', 'summary_large_image');
    metadataTwitter.setAttribute('name', 'twitter:site');
    metadataTwitter.setAttribute('content', '@voxelvanguard');
    
    const metadataTwitter2 = document.createElement('meta');
    metadataTwitter2.setAttribute('name', 'twitter:title');
    metadataTwitter2.setAttribute('content', title);
    metadataTwitter2.setAttribute('name', 'twitter:description');
    metadataTwitter2.setAttribute('content', description);

    const metadataTwitter3 = document.createElement('meta');
    metadataTwitter3.setAttribute('name', 'twitter:image');
    metadataTwitter3.setAttribute('content', imageUrl);

    const metadataTwitter4 = document.createElement('meta');
    metadataTwitter4.setAttribute('name', 'twitter:url');
    metadataTwitter4.setAttribute('content', url);
    
    const head = document.querySelector('head');
    
    head.appendChild(metadata);
    head.appendChild(metadata2);
    head.appendChild(metadata3);
    head.appendChild(metadata4);

    head.appendChild(metadataTwitter);
    head.appendChild(metadataTwitter2);
    head.appendChild(metadataTwitter3);
    head.appendChild(metadataTwitter4);

}

// Example usage:
generateMetadata(
    'Voxel Vanguard',
    'Voxel Vanguard is a dynamic strategy game set in a vibrant voxel world where players must strategically expand their territory by placing interconnected towers.',
    'src/store_capsule_header.png',
    'https://voxelvanguard.com');
