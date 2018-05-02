import {expect} from 'chai'
import {parseOJAIDocument} from '../src/ojai/OJAIUtils'
import {OBinaryData, ODate, OTime, OTimestamp} from '../src'

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
			    "$binary": "1AB10CDEF99232213233BBCD12"
		    }
	    }
    }`,
    obj: { map : { binData: new OBinaryData('1AB10CDEF99232213233BBCD12') } },
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
      const binaryData = new OBinaryData ('34AADSDSA1032421424124')
      expect(JSON.stringify(date)).to.be.eql('{"$dateDay":"2012-10-20"}')
      expect(JSON.stringify(time)).to.be.eql('{"$time":"07:42:46.123"}')
      expect(JSON.stringify(timestamp)).to.be.eql('{"$date":"2012-10-20T07:42:46.123-07:00"}')
      expect(JSON.stringify(binaryData)).to.be.eql('{"$binary":"34AADSDSA1032421424124"}')
    })
  })
})
