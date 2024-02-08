interface CsvFileReader {
    csvData: string

    readDatas(): string[];
}

class HappyBirthdayService {
    private sender: Sender;
    private fileReader: CsvFileReader;


    constructor(sender: Sender, fileReader: CsvFileReader) {
        this.sender = sender;
        this.fileReader = fileReader;
    }

    execute() {
        const datas = this.fileReader.readDatas();
        for (let i = 0; i < datas.length; i++) {
            this.sender.send(this.getMessage(datas[i]))
        }
    }

    private getMessage(firstName: string) {
        return `
            Subject: Happy birthday!
            Happy birthday, dear ${firstName}!
        `;
    }
}

class Sender {

    send(message: string) {

        console.log(message)
    }
}

class FileReaderImpl implements CsvFileReader {

    csvData: string;

    constructor(csvData: string) {
        this.csvData = csvData;
    }

    readDatas(): string[] {
        const handledData = this.getDataRows().map(rowData => rowData.split(', '));
        // console.log(handledData)
        return handledData.slice(1).map(data => data[1]);
    }

    private getDataRows() {
        return this.csvData.split('\n');
    }
}

describe('Happy Birthday', function () {
    let sender: Sender;

    beforeEach(() => {
        sender = new Sender();
    });

    it('should send happy birthday', () => {
        const inputCsvFile = `last_name, first_name, date_of_birth, email
 Doe, Tom, 1982/10/08, john.doe@foobar.com`;
        const fileReaderImpl = new FileReaderImpl(inputCsvFile);

        const spyRetrieve = jest.spyOn(sender, 'send');
        const happyBirthdayService = new HappyBirthdayService(sender, fileReaderImpl);
        happyBirthdayService.execute()
        expect(spyRetrieve).toBeCalledWith(`
            Subject: Happy birthday!
            Happy birthday, dear Tom!
        `)
    });

    it('should send happy birthday (Tom and Mary)', () => {
        const inputCsvFile = `last_name, first_name, date_of_birth, email
 Doe, Tom, 1982/10/08, john.doe@foobar.com
 Ann, Mary, 1975/09/11, mary.ann@foobar.com`;
        const fileReaderImpl = new FileReaderImpl(inputCsvFile);

        const sender = new Sender();
        const spyRetrieve = jest.spyOn(sender, 'send');
        const happyBirthdayService = new HappyBirthdayService(sender, fileReaderImpl);
        happyBirthdayService.execute()

        expect(spyRetrieve).toBeCalledWith(`
            Subject: Happy birthday!
            Happy birthday, dear Tom!
        `)
        expect(spyRetrieve).toBeCalledWith(`
            Subject: Happy birthday!
            Happy birthday, dear Mary!
        `)
    });


});
