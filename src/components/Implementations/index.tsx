import Block, { BlockProps } from '../Block';

const Implementations = (props: BlockProps) => (
  <Block {...props}>
    <div className="overflow-auto lg:overflow-visible">
      <table className="lg:table-fixed w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 lowercase">Package</th>
            <th className="px-4 py-2 lowercase">Pkg Version</th>
            <th className="px-4 py-2 lowercase">Spec Version</th>
            <th className="px-4 py-2 lowercase">Status</th>
            <th className="px-4 py-2 lowercase">Maintainer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/dart"
              >
                Dart
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/dart"
              >
                <img
                  src="https://img.shields.io/github/v/release/organisationsnummer/dart?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/meta/#package-specification-v11"
              >
                1.1
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/dart/actions"
              >
                <img
                  src="https://img.shields.io/github/workflow/status/organisationsnummer/dart/test?style=flat-square"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/go"
              >
                Go
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/go"
              >
                <img
                  src="https://img.shields.io/github/v/release/organisationsnummer/go?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/meta/#package-specification-v11"
              >
                1.1
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/go/actions"
              >
                <img
                  src="https://img.shields.io/github/workflow/status/organisationsnummer/go/test?style=flat-square"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/js"
              >
                JavaScript
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/js"
              >
                <img
                  src="https://img.shields.io/github/v/release/organisationsnummer/js?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v11"
              >
                1.1
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/js/actions"
              >
                <img
                  src="https://img.shields.io/github/workflow/status/organisationsnummer/js/build?style=flat-square"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/csharp"
              >
                C#
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/csharp"
              >
                <img
                  src="https://img.shields.io/github/v/release/organisationsnummer/csharp?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v11"
              >
                1.1
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/csharp/actions"
              >
                <img
                  src="https://img.shields.io/github/workflow/status/organisationsnummer/csharp/Release?style=flat-square"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/Johannestegner"
              >
                @Johannestegner
              </a>
            </td>            
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/php"
              >
                PHP
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/php"
              >
                <img
                  src="https://img.shields.io/github/v/release/organisationsnummer/php?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v11"
              >
                1.1
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/php/actions"
              >
                <img
                  src="https://img.shields.io/github/workflow/status/organisationsnummer/php/PHP%20Composer?style=flat-square"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/Johannestegner"
              >
                @Johannestegner
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Block>
);

export default Implementations;