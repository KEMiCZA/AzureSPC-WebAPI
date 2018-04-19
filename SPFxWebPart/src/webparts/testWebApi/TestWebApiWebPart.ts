import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'TestWebApiWebPartStrings';
import TestWebApi from './components/TestWebApi';
import { ITestWebApiProps } from './components/ITestWebApiProps';

export interface ITestWebApiWebPartProps {
  description: string;
}

export default class TestWebApiWebPart extends BaseClientSideWebPart<ITestWebApiWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITestWebApiProps > = React.createElement(
      TestWebApi,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}