interface Photo {
    location: string;
    date: Date;
    title: string;
}

interface Person {
    name: string;
    photo: Photo;
}

function renderPhoto(photo: Photo) {
    return photoDiv(photo);
}

function emitPhotoData(photo: Photo) {
    const result = [];
    result.push(`<p>title: ${photo.title}</p>`);
    result.push(`<p>location: ${photo.location}</p>`);
    result.push(`<p>date: ${photo.date.toDateString()}</p>`);
    return result.join("\n");
}

function renderPerson(person: Person, outStream: any) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function photoDiv(p: Photo) {
    return [
        "<div>",
        emitPhotoData(p),
        "</div>",
    ].join("\n");
}

describe('render test', function () {
    it('renderPhoto', () => {
        expect(renderPhoto({
            location: 'test',
            date: new Date("2024-01-01"),
            title: 'test'
        })).toBe(`<div>
<p>title: test</p>
<p>location: test</p>
<p>date: Mon Jan 01 2024</p>
</div>`);
    });

    it('renderPerson', () => {
        expect(renderPerson({
            name: 'test',
            photo: {
                location: 'test',
                date: new Date("2024-01-01"),
                title: 'test'
            }
        }, undefined)).toBe(`<p>test</p>
<div>
<p>title: test</p>
<p>location: test</p>
<p>date: Mon Jan 01 2024</p>
</div>
<p>title: test</p>
<p>location: test</p>
<p>date: Mon Jan 01 2024</p>`);
    });

});
