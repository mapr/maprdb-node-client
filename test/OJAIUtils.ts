import {expect} from 'chai'
import {parseOJAIDocument, stringifyOJAIDocument} from '../src/ojai/OJAIUtils'
import {ODate, OTime, OTimestamp} from '../src'

const expectations = [
  /////////////////////// Trivial test-cases ///////////////////
  {
    document: '{ }',
    obj: { },
  },
  {
    document: '{ "map": { } }',
    obj: { map : { } },
  },
  {
    document: '{ "map": { "null": null } }',
    obj: { map : { null: null } },
  },
  {
    document: `{
	    "map": {
		    "binData": {
			    "$binary": "YnVmZmVy"
		    }
	    }
    }`,
    obj: { map : { binData: Buffer.from('buffer') } },
  },
  /////////////////////// Test case from MAPRDB-584 //////////////////
  {
    document : `{
	"map": {
		"null": null,
		"boolean": true,
		"string": "eureka",
		"byte": {
			"$numberByte": 127
		},
		"short": {
			"$numberShort": 32767
		},
		"int": {
			"$numberInt": 2147483647
		},
		"long": {
			"$numberLong": 9223372036854775807
		},
		"float": {
			"$numberFloat": 3.015625
		},
		"double": 1.7976931348623157e308,
		"date": {
			"$dateDay": "2012-10-20"
		},
		"time": {
			"$time": "07:42:46.123"
		},
		"timestamp": {
			"$date": "2012-10-20T07:42:46.123-07:00"
		}
	}
} `,
    obj : { map:
        { null: null,
          boolean: true,
          string: 'eureka',
          byte: 127,
          short: 32767,
          int: 2147483647,
          long: 9223372036854776000,
          float: 3.015625,
          double: 1.7976931348623157e+308,
          date: new ODate ('2012-10-20'),
          time: new OTime ('07:42:46.123'),
          timestamp: new OTimestamp ('2012-10-20T07:42:46.123-07:00') } },
  },
  /////////////////////// Other test-cases ///////////////////
  {
    document: `{
	"map": {
		"long": {
			"$numberLong": 12345
		},
		"obj1": {
			"date1": {
				"data": "2012-10-20T07:42:46.123-07:00"
			},
			"date2": {
				"$date": "2012-10-20T07:42:46.123-07:00"
			}
		}
	}
}`,
    obj: {
      map : {
        long: 12345,
        obj1: {
          date1: {data : '2012-10-20T07:42:46.123-07:00'},
          date2: new OTimestamp('2012-10-20T07:42:46.123-07:00'),
        },
      },
    },
  },
]

describe('OJAIUtils', () => {
  describe('parseOJAIDocument tests', () => {
    expectations.forEach((expectation) => {
      it('should replace needed types', async () => {
        const obj = parseOJAIDocument(expectation.document)
        expect(obj).to.be.eql(expectation.obj)
      })
    })
    it('should convert to OJAItypeFormat', () => {
      const date = new ODate ('2012-10-20')
      const time = new OTime ('07:42:46.123')
      const timestamp = new OTimestamp ('2012-10-20T07:42:46.123-07:00')
      const binaryData = { _id : Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]) }
      expect(stringifyOJAIDocument(date)).to.be.eql('{"$dateDay":"2012-10-20"}')
      expect(stringifyOJAIDocument(time)).to.be.eql('{"$time":"07:42:46.123"}')
      expect(stringifyOJAIDocument(timestamp)).to.be.eql('{"$date":"2012-10-20T07:42:46.123-07:00"}')
      expect(stringifyOJAIDocument(binaryData)).to.be.eql('{"_id":{"$binary":"YnVmZmVy"}}')
    })
  })
})
