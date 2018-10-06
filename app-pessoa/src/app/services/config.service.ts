export class ConfigService {

    private urlService: string;

    constructor() {
        this.urlService = 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/2f493c90b03b9b086ea7be489aca6a554ab0a770f0e835fef9c3d147b8d34b50/30SCJ';
    }

    getUrlService(): string {
        return this.urlService;
    }

}